import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { UiSelectors } from "@/store/selectors";
import { UiActions } from "@/store/actions";
import { height } from "@/shared/animations";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  animations: [height],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  @Input()
  public isMenuOpen$: Observable<boolean>;

  public constructor(private readonly store$: Store) {}

  public ngOnInit(): void {
    this.isMenuOpen$ = this.store$.pipe(
      select(UiSelectors.selectDetailedMenuVisible),
    );
  }

  public closeMenu(): void {
    this.store$.dispatch(UiActions.setDetailedMenuVisible({ visible: false }));
  }

  public toggleMenu(): void {
    this.store$.dispatch(UiActions.toggleMenuVisible());
  }
}
