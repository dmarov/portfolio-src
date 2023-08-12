import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/home/home.component").then(mod => mod.HomeComponent),
    pathMatch: "full",
  },
  {
    path: "products",
    loadComponent: () => import("./pages/products/products.component").then(mod => mod.ProductsComponent),
  },
  {
    path: "about-me",
    loadComponent: () => import("./pages/about-me/about-me.component").then(mod => mod.AboutMeComponent),
  },
  {
    path: "**",
    loadComponent: () => import("./pages/not-found/not-found.component").then(mod => mod.NotFoundComponent),
    pathMatch: "full",
  },
];

