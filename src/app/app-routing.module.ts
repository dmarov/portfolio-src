import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAboutMeComponent } from './page-about-me/page-about-me.component';
import { PageMainComponent } from './page-main/page-main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageProjectsComponent } from './page-projects/page-projects.component';

const routes: Routes = [
  { path: '', component: PageMainComponent, pathMatch: 'full' },
  { path: 'products', component: PageProjectsComponent },
  { path: 'about-me', component: PageAboutMeComponent },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
