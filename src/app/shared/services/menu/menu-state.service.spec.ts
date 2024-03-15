import { TestBed } from "@angular/core/testing";
import { take, toArray } from "rxjs/operators";
import { Features } from "@/app/models/features/features.class";
import { MenuStateInterface } from "./menu-state.interface";
import { MenuStateService } from "./menu-state.service";
import { MENU_STATE } from "../../const/injection-tokens.const";

describe("MenuStateService", () => {
  let service: MenuStateInterface;

  const mockFeatures: Features = {
    SHOW_WHAT_I_STAND_FOR: true,
    RESPONSIVE_MENU_ENABLED: false,
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MENU_STATE,
          useClass: MenuStateService,
        },
        {
          provide: Features,
          useValue: mockFeatures,
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
