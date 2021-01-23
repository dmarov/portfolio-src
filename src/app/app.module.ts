import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};

import {
    MenuComponent, PageMainComponent, PageNotFoundComponent
} from './components';
import { MainSliderComponent } from './components/main-slider/main-slider.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        PageMainComponent,
        PageNotFoundComponent,
        PageMainComponent,
        MainSliderComponent,
    ],
    imports: [
        SwiperModule,
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [
        {
            provide: SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }