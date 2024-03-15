import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";

export interface TrackingInterface {
  sendCustomEvent(eventName: CustomTrackingEvent, data: object): Promise<void>;
}
