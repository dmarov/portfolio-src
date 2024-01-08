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
import { GoogleAnalyticsTracking } from "./app/shared/utils/tracking/impl/google-analytics-tracking";
import { DebugTracking } from "./app/shared/utils/tracking/impl/debug-tracking";
import { CompositeTracking } from "./app/shared/utils/tracking/impl/composite-tracking";
import { YandexMetrikaTracking } from "./app/shared/utils/tracking/impl/yandex-metrika-tracking";
import { KeyboardService } from "./app/shared/services/keyboard/keyboard.service";

if (environment.production) {
  window.userTracking = new CompositeTracking([
    new GoogleAnalyticsTracking(),
    new YandexMetrikaTracking(),
  ]);

  enableProdMode();
} else {
  window.userTracking = new DebugTracking();
}

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: MenuService,
      useClass: MenuServiceImpl,
    },
    KeyboardService,
    provideRouter(routes),
    importProvidersFrom([BrowserAnimationsModule]),
  ],
});
