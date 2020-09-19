import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    PageMainComponent, PageNotFoundComponent
} from './components';

const routes: Routes = [
    { path: '', component: PageMainComponent, pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
