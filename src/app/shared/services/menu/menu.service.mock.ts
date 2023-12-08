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

  public open(): void {
    // this method intended to be empty
  }

  public close(): void {
    // this method intended to be empty
  }
}
