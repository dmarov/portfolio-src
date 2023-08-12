import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideRouter, Routes } from "@angular/router";
import { environment } from "./environments/environment";
import { AppComponent } from "@/app.component";
import { MenuService } from "@/shared/services/menu.service";

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./app/pages/home/home.component").then(mod => mod.HomeComponent),
    pathMatch: "full",
  },
  {
    path: "products",
    loadComponent: () => import("./app/pages/products/products.component").then(mod => mod.ProductsComponent),
  },
  {
    path: "about-me",
    loadComponent: () => import("./app/pages/about-me/about-me.component").then(mod => mod.AboutMeComponent),
  },
  {
    path: "**",
    loadComponent: () => import("./app/pages/not-found/not-found.component").then(mod => mod.NotFoundComponent),
    pathMatch: "full",
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    MenuService,
    provideRouter(routes),
    importProvidersFrom([
      BrowserAnimationsModule,
    ]),
  ],
});
