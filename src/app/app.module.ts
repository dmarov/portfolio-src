import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from '@/app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as UiReducers from '@/store/reducers/ui';
import { RouterEffects } from "@/store/effects";

import {
    MenuComponent,
    PageMainComponent,
    PageNotFoundComponent,
    PageProjectsComponent,
    PageAboutMeComponent,
    LangComponent,
} from './components';

import { StoreBaseModule } from '@/modules';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

declare global {
    interface Window {
        dataLayer: any;
    }
}

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        PageMainComponent,
        PageNotFoundComponent,
        PageMainComponent,
        PageProjectsComponent,
        PageAboutMeComponent,
        LangComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        StoreBaseModule,
        StoreModule.forFeature(UiReducers.featureKey, UiReducers.reducer),
        EffectsModule.forFeature([ RouterEffects ]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
