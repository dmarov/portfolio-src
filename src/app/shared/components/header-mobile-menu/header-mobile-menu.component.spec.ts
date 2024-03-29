import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import {
  MENU_STATE,
  TRACKING,
  WINDOW,
} from "../../const/injection-tokens.const";
import { MenuStateServiceMock } from "../../services/menu/menu-state.service.mock";
import { TrackingServiceMock } from "../../services/tracking/tracking.service.mock";
import { HeaderMobileMenuComponent } from "./header-mobile-menu.component";

@Component({
  selector: "app-header-mobile-menu-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-header-mobile-menu></app-header-mobile-menu>",
  imports: [HeaderMobileMenuComponent],
})
export class HeaderMobileMenuTestComponent {}

describe("HeaderMobileMenuComponent", () => {
  let fixture: ComponentFixture<HeaderMobileMenuTestComponent>;
  mockIntersectionObserver();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MENU_STATE,
          useClass: MenuStateServiceMock,
        },
        {
          provide: TRACKING,
          useClass: TrackingServiceMock,
        },
        {
          provide: WINDOW,
          useValue: window,
        },
      ],
      imports: [NoopAnimationsModule, RouterTestingModule],
    });

    fixture = TestBed.createComponent(HeaderMobileMenuTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const el = document.querySelector(
      '[data-test="header-mobile-menu"]',
    ) as HTMLElement;

    expect(el).toBeTruthy();
  });
});
