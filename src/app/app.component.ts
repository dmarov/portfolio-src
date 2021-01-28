import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { UiActions } from './store/actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        private readonly router: Router,
        private readonly store$: Store
    ) { }

    ngOnInit() {
        this.router
            .events
            .subscribe(s => {
                if (s instanceof NavigationEnd) {
                    const tree = this.router.parseUrl(this.router.url);
                    if (tree.fragment) {
                        const element = document.querySelector("#" + tree.fragment);
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
