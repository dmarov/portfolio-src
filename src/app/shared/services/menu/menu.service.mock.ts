import { of } from "rxjs";
import { MenuService } from "./menu.service";

export class MenuServiceMock extends MenuService {
  public readonly menuVisible$ = of(false);

  public constructor() {
    super();
  }

  public toggle(): void {
    // this method intended to be empty
  }

  public show(): void {
    // this method intended to be empty
  }

  public hide(): void {
    // this method intended to be empty
  }
}
