import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { UiActions } from "@/store/actions";
import { UiSelectors } from "@/store/selectors";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public isMultilang = environment.multilang;

  public isMenuOpen$: Observable<boolean>;

  public constructor(
    private readonly router: Router,
    private readonly store$: Store,
  ) {}

  public ngOnInit(): void {
    this.isMenuOpen$ = this.store$.pipe(
      select(UiSelectors.selectDetailedMenuVisible),
    );

    this.router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          const element = document.querySelector(`#${tree.fragment}`);
          if (element) {
            element.scrollIntoView(true);
          }
        } else {
          window.scrollTo(0, 0);
        }
      }
    });
  }

  public toggleMenuOpen(): void {
    this.store$.dispatch(UiActions.toggleMenuVisible());
  }
}
