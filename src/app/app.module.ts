import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from '@/app.component';
import * as UiReducers from '@/store/reducers/ui';
import { RouterEffects } from '@/store/effects';
import { environment } from '../environments/environment';
import { StoreBaseModule } from './shared/modules/store-base.module';
import { LangComponent } from './shared/components/lang/lang.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsComponent } from './pages/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    LangComponent,
    MenuComponent,
    AboutMeComponent,
    MainComponent,
    NotFoundComponent,
    ProductsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    StoreBaseModule,
    StoreModule.forFeature(UiReducers.featureKey, UiReducers.reducer),
    EffectsModule.forFeature([RouterEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
