import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import { LangComponent } from "./lang.component";

@Component({
  selector: "app-lang-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-lang></app-lang>",
  imports: [LangComponent],
})
export class LangTestComponent {}

describe("LangComponent", () => {
  let fixture: ComponentFixture<LangTestComponent>;
  mockIntersectionObserver();

  beforeEach(() => {
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(LangTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const input = document.querySelector(
      '[data-test="lang"]',
    ) as HTMLInputElement;
    expect(input).toBeTruthy();
  });
});