import { CustomTrackingEvent } from "../tracking/custom-tracking-event.enum";

export interface ProductEntry {
  testAttr: string;
  fragment: string;
  trackingEvent: CustomTrackingEvent;
  alt: string;
  image: string;
}
