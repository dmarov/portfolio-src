import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import { WINDOW } from "../../const/injection-tokens.const";
import { MenuService } from "../../services/menu/menu.service";
import { MenuServiceMock } from "../../services/menu/menu.service.mock";
import { TrackingService } from "../../services/tracking/tracking.service";
import { TrackingServiceMock } from "../../services/tracking/tracking.service.mock";
import { HeaderMenuComponent } from "./header-menu.component";

@Component({
  selector: "app-menu-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-header-menu></app-header-menu>",
  imports: [HeaderMenuComponent],
})
export class MenuTestComponent {}

describe("MenuComponent", () => {
  let fixture: ComponentFixture<MenuTestComponent>;
  mockIntersectionObserver();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MenuService,
          useClass: MenuServiceMock,
        },
        {
          provide: TrackingService,
          useClass: TrackingServiceMock,
        },
        {
          provide: WINDOW,
          useValue: window,
        },
      ],
      imports: [NoopAnimationsModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(MenuTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const el = document.querySelector(
      '[data-test="header-menu"]',
    ) as HTMLElement;
    expect(el).toBeTruthy();
  });
});
