import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent {

    @HostBinding('class')
    class = 'app-layout__page';
}
