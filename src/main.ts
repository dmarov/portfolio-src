/// <reference types="@angular/localize" />

import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { environment } from "@/environments/environment";
import { AppComponent } from "@/app/app.component";
import { MenuService } from "@/app/shared/services/menu/menu.service";
import { routes } from "@/app/pages/routes.const";
import { MenuServiceImpl } from "./app/shared/services/menu/menu.service.impl";
import { GoogleAnalyticsTrackingService } from "./app/shared/services/tracking/impl/google-analytics-tracking.service";
import { DebugTrackingService } from "./app/shared/services/tracking/impl/debug-tracking.service";
import { CompositeTrackingService } from "./app/shared/services/tracking/impl/composite-tracking.service";
import { YandexMetrikaTrackingService } from "./app/shared/services/tracking/impl/yandex-metrika-tracking.service";
import { KeyboardService } from "./app/shared/services/keyboard/keyboard.service";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";

let tracking = new DebugTrackingService();

if (environment.production) {
  const timeout = environment.trackingEventTimeout;

  tracking = new CompositeTrackingService([
    new GoogleAnalyticsTrackingService(window.gtag, timeout),
    new YandexMetrikaTrackingService(window.ym, window.ym_counter_id, timeout),
  ]);

  enableProdMode();
}

// fetch(environment.featuresUrl).then(
//   (res) => {
//     const features = res;
//   },
//   (error) => {},
// );

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: MenuService,
      useClass: MenuServiceImpl,
    },
    {
      provide: TrackingService,
      useValue: tracking,
    },
    KeyboardService,
    provideRouter(routes),
    importProvidersFrom([BrowserAnimationsModule]),
  ],
});
