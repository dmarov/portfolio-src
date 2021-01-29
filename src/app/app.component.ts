import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { UiActions } from './store/actions';
import { UiSelectors } from './store/selectors';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    isMenuOpen$: Observable<boolean>;

    constructor(
        private readonly router: Router,
        private readonly store$: Store
    ) { }

    ngOnInit() {

        this.isMenuOpen$ = this.store$.pipe(
            select(UiSelectors.selectDetailedMenuVisible)
        );

        this.router
            .events
            .subscribe(s => {
                if (s instanceof NavigationEnd) {
                    const tree = this.router.parseUrl(this.router.url);
                    if (tree.fragment) {
                        const element = document.querySelector('#' + tree.fragment);
                        if (element) { element.scrollIntoView(true); }
                    } else {
                        window.scrollTo(0, 0);
                    }
                }
        });
    }

    toggleMenuOpen() {
        this.store$.dispatch(UiActions.toggleMenuVisible());
    }
}
