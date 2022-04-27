import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    PageMainComponent, PageNotFoundComponent,
    PageProjectsComponent, PageAboutMeComponent,
} from '@/components';

const routes: Routes = [
    { path: '', component: PageMainComponent, pathMatch: 'full' },
    { path: 'projects', component: PageProjectsComponent },
    { path: 'about-me', component: PageAboutMeComponent },
    { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
