import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    PageMainComponent, PageNotFoundComponent, PageProjectsComponent
} from './components';

const routes: Routes = [
    { path: '', component: PageMainComponent, pathMatch: 'full' },
    { path: 'projects', component: PageProjectsComponent },
    { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
