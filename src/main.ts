import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { environment } from "@/environments/environment";
import { AppComponent } from "@/app/app.component";
import { MenuService } from "@/app/shared/services/menu/menu.service";
import { routes } from "@/app/pages/routes.const";
import { MenuServiceImpl } from "./app/shared/services/menu/menu.service.impl";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: MenuService,
      useClass: MenuServiceImpl,
    },
    provideRouter(routes),
    importProvidersFrom([BrowserAnimationsModule]),
  ],
});
