import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { UiSelectors } from '@/store/selectors';
import { UiActions } from '@/store/actions';
import { height } from '@/animations';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    animations: [ height ],
    changeDetection: ChangeDetectionStrategy.OnPush,
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

    closeMenu() {
        this.store$.dispatch(
            UiActions.setDetailedMenuVisible({visible: false})
        );
    }

    toggleMenu() {
        this.store$.dispatch(
            UiActions.toggleMenuVisible()
        );
    }
}
