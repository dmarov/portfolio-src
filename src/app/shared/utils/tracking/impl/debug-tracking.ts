import { CustomTrackingEvent } from "@/app/models/custom-tracking-event.enum";
import { Tracking } from "../tracking";

export class DebugTracking extends Tracking {
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
