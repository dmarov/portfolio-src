import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page-projects',
    templateUrl: './page-projects.component.html',
    styleUrls: ['./page-projects.component.scss'],
    host: {
        class: 'app-layout__page',
    },
})
export class PageProjectsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
