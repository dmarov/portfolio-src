import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
    MenuComponent,
    PageMainComponent,
    PageNotFoundComponent,
    PageProjectsComponent,
    PageAboutMeComponent,
} from './components';

import { StoreBaseModule } from './modules';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        PageMainComponent,
        PageNotFoundComponent,
        PageMainComponent,
        PageProjectsComponent,
        PageAboutMeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
