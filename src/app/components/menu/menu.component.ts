import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { UiSelectors } from '../../store/selectors';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    @Input()
    isMenuOpen$: Observable<boolean>;

    constructor(
        private readonly store$: Store
    ) { }

    ngOnInit() {
        this.isMenuOpen$ = this.store$.pipe(
            select(UiSelectors.selectDetailedMenuVisible)
        );
    }
}
