/// <reference types="@angular/localize" />

import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { NG_SCROLLBAR_OPTIONS } from "ngx-scrollbar";
import { environment } from "@env/environment";
import { AppComponent } from "@/app.component";
import { routes } from "@/pages/routes.const";
import { MenuStateService } from "./app/shared/services/menu/menu-state.service";
import { fetchFeatures } from "@/shared/utils/fetch-features/fetch-features.util";
import {
  ENVIRONMENT,
  FEATURES,
  LANGUAGE_SWITCH,
  MENU_STATE,
  TRACKING,
  VISIT_TIME,
  WINDOW,
} from "@/shared/const/injection-tokens.const";
import { languageSwitchServiceFactory } from "@/shared/factories/language-switch-service.factory";
import { trackingServiceFactory } from "@/shared/factories/tracking-service.factory";

if (environment.production) {
  enableProdMode();
}

fetchFeatures().then((features) => {
  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),
      importProvidersFrom([BrowserAnimationsModule]),
      {
        provide: NG_SCROLLBAR_OPTIONS,
        useValue: {
          appearance: "standard",
        },
      },
      {
        provide: TRACKING,
        useFactory: trackingServiceFactory,
        deps: [WINDOW, ENVIRONMENT],
      },
      {
        provide: LANGUAGE_SWITCH,
        useFactory: languageSwitchServiceFactory,
        deps: [ENVIRONMENT],
      },
      {
        provide: WINDOW,
        useValue: window,
      },
      {
        provide: ENVIRONMENT,
        useValue: environment,
      },
      {
        provide: FEATURES,
        useValue: features,
      },
      {
        provide: MENU_STATE,
        useClass: MenuStateService,
      },
      {
        provide: VISIT_TIME,
        useValue: Date.now(),
      },
    ],
  });
});
