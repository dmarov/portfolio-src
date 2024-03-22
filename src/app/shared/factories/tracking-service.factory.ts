import { AppEnvironment } from "@/models/app-environment.interface";
import { CompositeTrackingService } from "../services/tracking/composite-tracking.service";
import { DebugTrackingService } from "../services/tracking/debug-tracking.service";
import { GoogleAnalyticsTrackingService } from "../services/tracking/google-analytics-tracking.service";
import { TrackingInterface } from "../services/tracking/tracking.interface";
import { YandexMetrikaTrackingService } from "../services/tracking/yandex-metrika-tracking.service";
import { AppConstants } from "@/models/constants/app-constants";

export const trackingServiceFactory = (
  win: Window,
  environment: AppEnvironment,
  constants: AppConstants,
): TrackingInterface => {
  if (environment.debugTracking) {
    return new DebugTrackingService();
  }

  const timeout = constants.trackingEventTimeout;

  return new CompositeTrackingService([
    new GoogleAnalyticsTrackingService(win.gtag, timeout),
    new YandexMetrikaTrackingService(win.ym, win.ym_counter_id, timeout),
  ]);
};
