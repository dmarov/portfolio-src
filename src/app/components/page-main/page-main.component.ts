import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UnfoldEffect } from '../../utils';

@Component({
    selector: 'app-page-main',
    templateUrl: './page-main.component.html',
    styleUrls: ['./page-main.component.scss'],
    host: {
        class: 'app-layout__page page-main',
    },
})
export class PageMainComponent implements OnInit, AfterViewInit {

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        UnfoldEffect.init();
    }
}
