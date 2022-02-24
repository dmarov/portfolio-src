import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { UnfoldEffect, InViewEffect } from '../../utils';

@Component({
    selector: 'app-page-projects',
    templateUrl: './page-projects.component.html',
    styleUrls: ['./page-projects.component.scss'],
})
export class PageProjectsComponent implements OnInit, AfterViewInit {

    @HostBinding('class')
    classes = 'app-layout__page';

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        UnfoldEffect.init();
        InViewEffect.init();
    }

}
