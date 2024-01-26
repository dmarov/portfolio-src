import { TestBed } from "@angular/core/testing";
import { take, toArray } from "rxjs/operators";
import { Features } from "@/app/models/features/features.class";
import { MenuService } from "./menu.service";
import { MenuServiceImpl } from "./menu.service.impl";

describe("MenuService", () => {
  let service: MenuService;

  const mockFeatures: Features = {
    SHOW_WHAT_I_STAND_FOR: true,
    RESPONSIVE_MENU_ENABLED: false,
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MenuService,
          useClass: MenuServiceImpl,
        },
        {
          provide: Features,
          useValue: mockFeatures,
        },
      ],
    });

    service = TestBed.inject(MenuService);
  });

  it("should emit opposite value after menu toggle", () => {
    service.menuVisible$.pipe(take(3), toArray()).subscribe((values) => {
      expect(values).toEqual([false, true, false]);
    });

    service.toggle();
    service.toggle();
  });
});
