import { Observable } from "rxjs";

export interface MenuStateInterface {
  readonly menuVisible$: Observable<boolean>;

  readonly isDesktop$: Observable<boolean>;

  toggle(): void;

  setWindowWidth(width: number): void;
}
