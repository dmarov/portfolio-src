import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { TrackingService } from "../tracking.service";

export class GoogleAnalyticsTrackingService extends TrackingService {
  public constructor(
    private readonly gtag: Function,
    private readonly timeout: number,
  ) {
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
