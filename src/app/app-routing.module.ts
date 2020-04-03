import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from "./page-home/page-home.component";
import { PageProjectsComponent } from "./page-projects/page-projects.component";
import { PageAboutMeComponent } from "./page-about-me/page-about-me.component";
import { PageContactsComponent } from "./page-contacts/page-contacts.component";

const routes: Routes = [
    { path: "", component: PageHomeComponent },
    { path: "projects", component: PageProjectsComponent },
    { path: "about-me", component: PageAboutMeComponent },
    { path: "contacts", component: PageContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
