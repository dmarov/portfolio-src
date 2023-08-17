import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { environment } from "./environments/environment";
import { AppComponent } from "@/app.component";
import { MenuService } from "@/shared/services/menu.service";
import { routes } from "@/pages/routes.const";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    MenuService,
    provideRouter(routes),
    importProvidersFrom([BrowserAnimationsModule]),
  ],
});
