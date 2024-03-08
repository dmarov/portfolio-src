import { Injectable } from "@angular/core";
import { BehaviorSubject, distinctUntilChanged, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MenuService } from "./menu.service";

@Injectable({
  providedIn: "any",
})
export class MenuServiceImpl extends MenuService {
  public readonly menuVisible$: Observable<boolean>;

  public readonly isDesktop$: Observable<boolean>;

  private readonly menuVisibleInner$ = new BehaviorSubject<boolean>(false);

  private readonly windowWidthInner$ = new BehaviorSubject<number>(0);

  public constructor() {
    super();
    this.menuVisible$ = this.menuVisibleInner$.asObservable();

    this.isDesktop$ = this.windowWidthInner$.pipe(
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
