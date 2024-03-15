import { Observable, of } from "rxjs";
import { MenuStateInterface } from "./menu-state.interface";

export class MenuStateServiceMock implements MenuStateInterface {
  public readonly menuVisible$ = of(false);

  public readonly isDesktop$: Observable<boolean> = of(true);

  public toggle(): void {
    // this method intended to be empty
  }

  public setWindowWidth(): void {
    // this method intended to be empty
  }
}
