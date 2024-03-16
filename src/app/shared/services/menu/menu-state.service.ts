import { Injectable } from "@angular/core";
import { BehaviorSubject, distinctUntilChanged, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MenuStateInterface } from "./menu-state.interface";

@Injectable({
  providedIn: "any",
})
export class MenuStateService implements MenuStateInterface {
  public readonly isMenuOpened$: Observable<boolean>;

  public readonly isDesktopMode$: Observable<boolean>;

  private readonly menuVisibleInner$ = new BehaviorSubject<boolean>(false);

  private readonly windowWidthInner$ = new BehaviorSubject<number>(0);

  public constructor() {
    this.isMenuOpened$ = this.menuVisibleInner$.asObservable();

    this.isDesktopMode$ = this.windowWidthInner$.pipe(
      distinctUntilChanged(),
      map((w) => w >= 600),
    );
  }

  public toggle(): void {
    this.menuVisibleInner$.next(!this.menuVisibleInner$.getValue());
  }

  public setWindowWidth(width: number): void {
    this.windowWidthInner$.next(width);
  }
}
