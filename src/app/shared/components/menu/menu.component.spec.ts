import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import { MenuService } from "../../services/menu/menu.service";
import { MenuServiceMock } from "../../services/menu/menu.service.mock";
import { MenuComponent } from "./menu.component";

@Component({
  selector: "app-menu-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-menu></app-menu>",
  imports: [MenuComponent],
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
      ],
      imports: [NoopAnimationsModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(MenuTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const input = document.querySelector(
      '[data-test="menu"]',
    ) as HTMLInputElement;
    expect(input).toBeTruthy();
  });
});
