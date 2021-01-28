import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { UiActions } from './store/actions';
import { UiSelectors } from './store/selectors';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    isMenuOpened$: Observable<boolean>;

    constructor(
        private readonly router: Router,
        private readonly store$: Store
    ) {
        router
            .events
            .subscribe(s => {
                if (s instanceof NavigationEnd) {
                    const tree = router.parseUrl(router.url);
                    if (tree.fragment) {
                        const element = document.querySelector("#" + tree.fragment);
                        if (element) { element.scrollIntoView(true); }
                    } else {
                        window.scrollTo(0, 0);
                    }
                }
        });
    }

    ngOnInit() {
        this.isMenuOpened$ = this.store$.pipe(
            select(UiSelectors.selectDetailedMenuVisible)
        )
    }

    toggleMenuOpen() {
        this.store$.dispatch(UiActions.toggleMenuVisible());
    }
}
