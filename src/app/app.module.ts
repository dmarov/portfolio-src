import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
    MenuComponent, PageMainComponent, PageNotFoundComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageMainComponent,
    PageNotFoundComponent,
    PageMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
