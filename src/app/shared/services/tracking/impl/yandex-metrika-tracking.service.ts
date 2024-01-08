import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { environment } from "@/environments/environment";
import { TrackingService } from "../tracking.service";

export class YandexMetrikaTrackingService extends TrackingService {
  private readonly timeout = environment.trackingEventTimeout;

  public constructor(
    private readonly ym: Function,
    private readonly ymCounterId: number,
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
