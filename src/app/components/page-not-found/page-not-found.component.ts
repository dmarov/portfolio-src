import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {

    @HostBinding('class')
    class = 'app-layout__page';
}
