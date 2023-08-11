import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "@/app-routing.module";
import { AppComponent } from "@/app.component";
import { LangComponent } from "./shared/components/lang/lang.component";
import { MenuComponent } from "./shared/components/menu/menu.component";
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { ProductsComponent } from "./pages/products/products.component";
import { MenuService } from "./shared/services/menu.service";

@NgModule({
  declarations: [
    AboutMeComponent,
    AppComponent,
    HomeComponent,
    LangComponent,
    MenuComponent,
    NotFoundComponent,
    ProductsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [
    MenuService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
