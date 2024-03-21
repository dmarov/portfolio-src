import { CustomTrackingEvent } from "@/models/tracking/custom-tracking-event.enum";
import { TrackingInterface } from "./tracking.interface";

export class DebugTrackingService implements TrackingInterface {
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
