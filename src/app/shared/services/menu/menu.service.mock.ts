import { Observable, of } from "rxjs";
import { MenuService } from "./menu.service";

export class MenuServiceMock extends MenuService {
  public readonly menuVisible$ = of(false);

  public readonly isDesktop$: Observable<boolean> = of(true);

  public constructor() {
    super();
  }

  public toggle(): void {
    // this method intended to be empty
  }

  public setWindowWidth(): void {
    // this method intended to be empty
  }
}
