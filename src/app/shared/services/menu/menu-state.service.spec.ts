import { TestBed } from "@angular/core/testing";
import { take, toArray } from "rxjs/operators";
import { MenuStateInterface } from "./menu-state.interface";
import { MenuStateService } from "./menu-state.service";
import { MENU_STATE } from "../../const/injection-tokens.const";

describe("MenuStateService", () => {
  let service: MenuStateInterface;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MENU_STATE,
          useClass: MenuStateService,
        },
      ],
    });

    service = TestBed.inject(MENU_STATE);
  });

  it("should emit opposite value after menu toggle", () => {
    service.menuVisible$.pipe(take(3), toArray()).subscribe((values) => {
      expect(values).toEqual([false, true, false]);
    });

    service.toggle();
    service.toggle();
  });
});
