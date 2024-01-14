/// <reference types="@angular/localize" />

import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { NG_SCROLLBAR_OPTIONS } from "ngx-scrollbar";
import { environment } from "@/environments/environment";
import { AppComponent } from "@/app/app.component";
import { MenuService } from "@/app/shared/services/menu/menu.service";
import { routes } from "@/app/pages/routes.const";
import { MenuServiceImpl } from "./app/shared/services/menu/menu.service.impl";
import { GoogleAnalyticsTrackingService } from "./app/shared/services/tracking/impl/google-analytics-tracking.service";
import { DebugTrackingService } from "./app/shared/services/tracking/impl/debug-tracking.service";
import { CompositeTrackingService } from "./app/shared/services/tracking/impl/composite-tracking.service";
import { YandexMetrikaTrackingService } from "./app/shared/services/tracking/impl/yandex-metrika-tracking.service";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";
import { Features } from "./app/models/features/features.class";
import { fetchFeatures } from "./app/shared/utils/fetch-features/fetch-features.util";

fetchFeatures().then((features) => {
  let tracking: TrackingService = new DebugTrackingService();

  if (environment.production) {
    const timeout = environment.trackingEventTimeout;

    tracking = new CompositeTrackingService([
      new GoogleAnalyticsTrackingService(window.gtag, timeout),
      new YandexMetrikaTrackingService(
        window.ym,
        window.ym_counter_id,
        timeout,
      ),
    ]);

    enableProdMode();
  }

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
      {
        provide: Features,
        useValue: Object.freeze(features),
      },
      provideRouter(routes),
      importProvidersFrom([BrowserAnimationsModule]),
      {
        provide: NG_SCROLLBAR_OPTIONS,
        useValue: {
          appearance: "standard",
        },
      },
    ],
  });
});
