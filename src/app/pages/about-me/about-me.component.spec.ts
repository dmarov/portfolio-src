import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import { AboutMeComponent } from "./about-me.component";

@Component({
  selector: "app-about-me-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-about-me></app-about-me>",
  imports: [AboutMeComponent],
})
export class AboutMeTestComponent {}

describe("AboutMeComponent", () => {
  let fixture: ComponentFixture<AboutMeTestComponent>;
  mockIntersectionObserver();

  beforeEach(() => {
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(AboutMeTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const input = document.querySelector(
      '[data-test="about-me"]',
    ) as HTMLElement;
    expect(input).toBeTruthy();
  });
});
