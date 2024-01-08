import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { environment } from "@/environments/environment";
import { TrackingService } from "../tracking.service";

export class GoogleAnalyticsTrackingService extends TrackingService {
  private readonly timeout = environment.trackingEventTimeout;

  public constructor(private readonly gtag: Function) {
    super();
  }

  public sendCustomEvent(
    eventName: CustomTrackingEvent,
    data: object,
  ): Promise<void> {
    return new Promise((res) => {
      this.gtag("event", `custom_${eventName}`, {
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
