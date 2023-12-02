import { GoogleAnalytics } from "../shared/utils/google-analytics/google-analytics";
import { Lang } from "./lang.enum";
import { TrackingEvents } from "./tracking-events.enum";

export const languages = [
  {
    type: Lang.English,
    url: "/en",
    text: "EN",
    onClick(): void {
      GoogleAnalytics.sendEvent(TrackingEvents.SwitchEnClick, {});
    },
  },
  {
    type: Lang.Russian,
    url: "/ru",
    text: "RU",
    onClick(): void {
      GoogleAnalytics.sendEvent(TrackingEvents.SwitchRuClick, {});
    },
  },
];
