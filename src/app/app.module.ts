import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageProjectsComponent } from './page-projects/page-projects.component';
import { PageAboutMeComponent } from './page-about-me/page-about-me.component';
import { PageContactsComponent } from './page-contacts/page-contacts.component';
import { BurgerComponent } from './burger/burger.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageHomeComponent,
    PageProjectsComponent,
    PageAboutMeComponent,
    PageContactsComponent,
    BurgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
