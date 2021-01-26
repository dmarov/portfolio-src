import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    isMenuOpen = false;

    constructor(
        private router: Router,
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
}
