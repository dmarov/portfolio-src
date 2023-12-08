import { TestBed } from "@angular/core/testing";
import { take, toArray } from "rxjs/operators";
import { MenuService } from "./menu.service";
import { MenuServiceImpl } from "./menu.service.impl";

describe("MenuService", () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MenuService,
          useClass: MenuServiceImpl,
        },
      ],
    });

    service = TestBed.inject(MenuService);
  });

  it("should emit true after menu open", () => {
    service.menuVisible$.pipe(take(2), toArray()).subscribe((values) => {
      expect(values).toEqual([false, true]);
    });

    service.open();
  });

  it("should emit false after menu closed", () => {
    service.menuVisible$.pipe(take(3), toArray()).subscribe((values) => {
      expect(values).toEqual([false, true, false]);
    });

    service.open();
    service.close();
  });

  it("should emit opposite value after menu toggle", () => {
    service.menuVisible$.pipe(take(3), toArray()).subscribe((values) => {
      expect(values).toEqual([false, true, false]);
    });

    service.toggle();
    service.toggle();
  });
});
