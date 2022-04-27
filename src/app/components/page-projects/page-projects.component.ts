import { Component, AfterViewInit, HostBinding } from '@angular/core';
import { UnfoldEffect, InViewEffect } from '@/utils';

@Component({
    selector: 'app-page-projects',
    templateUrl: './page-projects.component.html',
    styleUrls: ['./page-projects.component.scss'],
})
export class PageProjectsComponent implements AfterViewInit {

    @HostBinding('class')
    classes = 'app-layout__page';

    ngAfterViewInit() {
        UnfoldEffect.init();
        InViewEffect.init();
    }
}
