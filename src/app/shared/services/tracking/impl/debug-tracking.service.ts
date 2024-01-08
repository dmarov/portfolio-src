import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { TrackingService } from "../tracking.service";

export class DebugTrackingService extends TrackingService {
  public sendCustomEvent(
    eventName: CustomTrackingEvent,
    data: object,
  ): Promise<void> {
    // eslint-disable-next-line no-console
    console.info(
      `Sending tracking event ${eventName} with data ${JSON.stringify(data)}`,
    );

    return Promise.resolve();
  }
}
