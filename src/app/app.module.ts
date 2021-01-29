import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as UiReducers from './store/reducers/ui';

import {
    MenuComponent,
    PageMainComponent,
    PageNotFoundComponent,
    PageProjectsComponent,
    PageAboutMeComponent,
} from './components';

import { SmoothHeightAnimDirective } from './directives';

import { StoreBaseModule } from './modules';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        PageMainComponent,
        PageNotFoundComponent,
        PageMainComponent,
        PageProjectsComponent,
        PageAboutMeComponent,
        SmoothHeightAnimDirective,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        StoreBaseModule,
        StoreModule.forFeature(UiReducers.featureKey, UiReducers.reducer),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
