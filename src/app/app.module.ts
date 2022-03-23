import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as UiReducers from './store/reducers/ui';
import { RouterEffects } from "./store/effects";

import {
    MenuComponent,
    PageMainComponent,
    PageNotFoundComponent,
    PageProjectsComponent,
    PageAboutMeComponent,
} from './components';

import { StoreBaseModule } from './modules';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';


const title = "Hello, I see you decided to open console, which probably means that you're interested and want to know more";
console.log(`%c${title}`, "color: red; font-size: 40px");

const subTitle = "I think I said everything I needed regarding my carrier, so there's some other stuff"
console.log(`%c${subTitle}`, "color: yellow; font-size: 30px");

console.log(`%cI like hacking which I regard as trying new stuff`, "color: white; font-size: 20px");
console.log(`%cRegarding to game hacking I've spend a lot of time trying to bypass commercial anti-cheat and I've managed to do it, surprisingly`, "color: white; font-size: 20px");
console.log(`%cI enjoy learning music theory`, "color: white; font-size: 20px");
console.log(`%cI like thinking process by itself`, "color: white; font-size: 20px");

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
