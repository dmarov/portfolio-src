import { BehaviorSubject, Observable } from "rxjs";

export class MenuService {
  public menuVisible$: Observable<boolean>;

  private menuVisibleInner$ = new BehaviorSubject<boolean>(false);

  public constructor() {
    this.menuVisible$ = this.menuVisibleInner$.asObservable();
  }

  public toggle(): void {
    this.menuVisibleInner$.next(!this.menuVisibleInner$.getValue());
  }

  public show(): void {
    this.menuVisibleInner$.next(true);
  }

  public hide(): void {
    this.menuVisibleInner$.next(false);
  }
}
