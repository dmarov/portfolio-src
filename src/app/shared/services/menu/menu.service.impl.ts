import { BehaviorSubject, Observable } from "rxjs";
import { MenuService } from "./menu.service";

export class MenuServiceImpl extends MenuService {
  public readonly menuVisible$: Observable<boolean>;

  private readonly menuVisibleInner$ = new BehaviorSubject<boolean>(false);

  public constructor() {
    super();
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
