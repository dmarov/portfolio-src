import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";

export abstract class Tracking {
  public abstract sendCustomEvent(
    eventName: CustomTrackingEvent,
    data: object,
  ): Promise<void>;
}
