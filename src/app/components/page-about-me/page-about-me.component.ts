import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UnfoldEffect, InViewEffect } from '../../utils';

@Component({
    selector: 'app-page-about-me',
    templateUrl: './page-about-me.component.html',
    styleUrls: ['./page-about-me.component.scss'],
    host: {
        class: 'app-layout__page',
    },
})
export class PageAboutMeComponent implements OnInit, AfterViewInit {

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        UnfoldEffect.init();
        InViewEffect.init();
    }

}
