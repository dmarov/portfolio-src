import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { UnfoldEffect, InViewEffect } from '../../utils';

@Component({
    selector: 'app-page-about-me',
    templateUrl: './page-about-me.component.html',
    styleUrls: ['./page-about-me.component.scss'],
})
export class PageAboutMeComponent implements OnInit, AfterViewInit {

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
