import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./home/home.component").then((mod) => mod.HomeComponent),
    pathMatch: "full",
  },
  {
    path: "products",
    loadComponent: () =>
      import("./products/products.component").then(
        (mod) => mod.ProductsComponent,
      ),
  },
  {
    path: "about-me",
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
