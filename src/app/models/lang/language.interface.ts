import { CustomTrackingEvent } from "../tracking/custom-tracking-event.enum";
import { LanguageType } from "./language-type.enum";

export interface Language {
  type: LanguageType;
  url: string;
  text: string;
  trackingEvent: CustomTrackingEvent;
}
