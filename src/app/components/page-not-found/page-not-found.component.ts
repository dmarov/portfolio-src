import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {

    @HostBinding('class')
    class = 'app-layout__page';

    constructor() { }

    ngOnInit(): void {
    }

}
