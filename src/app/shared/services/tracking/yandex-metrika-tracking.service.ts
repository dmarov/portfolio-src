import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { TrackingInterface } from "./tracking.interface";

export class YandexMetrikaTrackingService implements TrackingInterface {
  public constructor(
    private readonly ym: Function,
    private readonly ymCounterId: number,
    private readonly timeout: number,
  ) {}

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
