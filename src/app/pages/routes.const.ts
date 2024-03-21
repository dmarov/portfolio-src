import { Routes } from "@angular/router";
import { RoutePath } from "@/models/routing/route-path.enum";

export const routes: Routes = [
  {
    path: RoutePath.Home,
    loadComponent: () =>
      import("./home/home.component").then((mod) => mod.HomeComponent),
    pathMatch: "full",
  },
  {
    path: RoutePath.Products,
    loadComponent: () =>
      import("./products/products.component").then(
        (mod) => mod.ProductsComponent,
      ),
  },
  {
    path: RoutePath.AboutMe,
    loadComponent: () =>
      import("./about-me/about-me.component").then(
        (mod) => mod.AboutMeComponent,
      ),
  },
  {
    path: "**",
    loadComponent: () =>
      import("./not-found/not-found.component").then(
        (mod) => mod.NotFoundComponent,
      ),
    pathMatch: "full",
  },
];
