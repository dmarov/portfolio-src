import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { TrackingService } from "../tracking.service";

export class YandexMetrikaTrackingService extends TrackingService {
  public constructor(
    private readonly ym: Function,
    private readonly ymCounterId: number,
    private readonly timeout: number,
  ) {
    super();
  }

  public sendCustomEvent(
    eventName: CustomTrackingEvent,
    data: object,
  ): Promise<void> {
    return new Promise((res) => {
      this.ym(this.ymCounterId, "reachGoal", `custom_${eventName}`, {
        ...data,
        callback: () => {
          res();
        },
      });

      setTimeout(() => {
        res();
      }, this.timeout);
    });
  }
}
