import { Observable, of } from "rxjs";
import { MenuStateInterface } from "./menu-state.interface";

export class MenuStateServiceMock implements MenuStateInterface {
  public readonly isMenuOpened$ = of(false);

  public readonly isDesktopMode$: Observable<boolean> = of(true);

  public toggle(): void {
    // this method intended to be empty
  }

  public setWindowWidth(): void {
    // this method intended to be empty
  }
}
