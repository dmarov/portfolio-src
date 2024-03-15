/// <reference types="@angular/localize" />

import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { NG_SCROLLBAR_OPTIONS } from "ngx-scrollbar";
import { environment } from "@/environments/environment";
import { AppComponent } from "@/app/app.component";
import { routes } from "@/app/pages/routes.const";
import { MenuStateService } from "./app/shared/services/menu/menu-state.service";
import { Features } from "@/app/models/features/features.class";
import { fetchFeatures } from "@/app/shared/utils/fetch-features/fetch-features.util";
import {
  ENVIRONMENT,
  LANGUAGE_SWITCH,
  MENU_STATE,
  TRACKING,
  VISIT_TIME,
  WINDOW,
} from "@/app/shared/const/injection-tokens.const";
import { languageSwitchServiceFactory } from "@/app/shared/factories/language-switch-service.factory";
import { trackingServiceFactory } from "@/app/shared/factories/tracking-service.factory";

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
        provide: Features,
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
