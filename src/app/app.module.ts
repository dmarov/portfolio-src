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
import { LangComponent } from './components/lang/lang.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageAboutMeComponent } from './components/page-about-me/page-about-me.component';
import { PageMainComponent } from './components/page-main/page-main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageProjectsComponent } from './components/page-projects/page-projects.component';
import { StoreBaseModule } from './shared/modules/store-base.module';

@NgModule({
  declarations: [
    AppComponent,
    LangComponent,
    MenuComponent,
    PageAboutMeComponent,
    PageMainComponent,
    PageMainComponent,
    PageNotFoundComponent,
    PageProjectsComponent,
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
