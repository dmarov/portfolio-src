import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { environment } from "@/environments/environment";
import { TrackingService } from "../tracking.service";

export class YandexMetrikaTrackingService extends TrackingService {
  private readonly timeout = environment.trackingEventTimeout;

  public sendCustomEvent(
    eventName: CustomTrackingEvent,
    data: object,
  ): Promise<void> {
    return new Promise((res) => {
      window.ym(window.ym_counter_id, "reachGoal", `custom_${eventName}`, {
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
