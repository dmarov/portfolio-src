import { AppEnvironment } from "@/app/models/app-environment.interface";
import { CompositeTrackingService } from "../services/tracking/impl/composite-tracking.service";
import { DebugTrackingService } from "../services/tracking/impl/debug-tracking.service";
import { GoogleAnalyticsTrackingService } from "../services/tracking/impl/google-analytics-tracking.service";
import { YandexMetrikaTrackingService } from "../services/tracking/impl/yandex-metrika-tracking.service";
import { TrackingService } from "../services/tracking/tracking.service";

export const trackingServiceFactory = (
  win: Window,
  environment: AppEnvironment,
): TrackingService => {
  if (environment.debugTracking) {
    return new DebugTrackingService();
  }

  const timeout = environment.trackingEventTimeout;

  return new CompositeTrackingService([
    new GoogleAnalyticsTrackingService(win.gtag, timeout),
    new YandexMetrikaTrackingService(win.ym, win.ym_counter_id, timeout),
  ]);
};
