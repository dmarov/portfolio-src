import { Observable } from "rxjs";
import { CustomTrackingEvent } from "../tracking/custom-tracking-event.enum";

export interface Language {
  url$: Observable<string>;
  text: string;
  trackingEvent: CustomTrackingEvent;
  isActive: boolean;
}
