import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UnfoldEffect, InViewEffect } from '../../utils';

@Component({
    selector: 'app-page-projects',
    templateUrl: './page-projects.component.html',
    styleUrls: ['./page-projects.component.scss'],
    host: {
        class: 'app-layout__page',
    },
})
export class PageProjectsComponent implements OnInit, AfterViewInit {

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        UnfoldEffect.init();
        InViewEffect.init();
    }

}
