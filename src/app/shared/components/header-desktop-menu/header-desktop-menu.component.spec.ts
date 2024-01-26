import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import { HeaderDesktopMenuComponent } from "./header-desktop-menu.component";

@Component({
  selector: "app-header-desktop-menu-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-header-desktop-menu></app-header-desktop-menu>",
  imports: [HeaderDesktopMenuComponent],
})
export class HeaderDesktopMenuTestComponent { }

describe("HeaderDesktopMenuComponent", () => {
  let fixture: ComponentFixture<HeaderDesktopMenuTestComponent>;
  mockIntersectionObserver();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(HeaderDesktopMenuTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const el = document.querySelector(
      '[data-test="header-desktop-menu"]',
    ) as HTMLElement;

    expect(el).toBeTruthy();
  });
});
