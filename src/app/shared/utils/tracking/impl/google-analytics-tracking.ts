import { CustomTrackingEvent } from "@/app/models/custom-tracking-event.enum";
import { environment } from "@/environments/environment";
import { Tracking } from "../tracking";

export class GoogleAnalyticsTracking extends Tracking {
  private readonly timeout = environment.trackingEventTimeout;

  public sendCustomEvent(
    eventName: CustomTrackingEvent,
    data: object,
  ): Promise<void> {
    return new Promise((res) => {
      window.gtag("event", `custom_${eventName}`, {
        ...data,
        event_callback: () => {
          res();
        },
      });

      setTimeout(() => {
        res();
      }, this.timeout);
    });
  }
}
