import { Observable } from "rxjs";

export interface MenuStateInterface {
  readonly isMenuOpened$: Observable<boolean>;

  readonly isDesktopMode$: Observable<boolean>;

  toggle(): void;

  setWindowWidth(width: number): void;
}
