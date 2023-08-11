import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { ProductsComponent } from "./pages/products/products.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "products", component: ProductsComponent },
  { path: "about-me", component: AboutMeComponent },
  { path: "**", component: NotFoundComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
