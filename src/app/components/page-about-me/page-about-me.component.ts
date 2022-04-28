import { Component, AfterViewInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { UnfoldEffect, InViewEffect } from '@/utils';

@Component({
    selector: 'app-page-about-me',
    templateUrl: './page-about-me.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageAboutMeComponent implements AfterViewInit {

    @HostBinding('class')
    classes = 'app-layout__page';

    constructor() { }

    ngAfterViewInit() {
        UnfoldEffect.init();
        InViewEffect.init();
    }
}
