import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";

export abstract class TrackingService {
  public abstract sendCustomEvent(
    eventName: CustomTrackingEvent,
    data: object,
  ): Promise<void>;
}
