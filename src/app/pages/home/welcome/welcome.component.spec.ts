import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import { CONSTANTS, VISIT_TIME } from "@/shared/const/injection-tokens.const";
import { WelcomeComponent } from "./welcome.component";
import { constants } from "@/shared/const/constants.const";

@Component({
  selector: "app-welcome-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-welcome></app-welcome>",
  imports: [WelcomeComponent],
})
export class WelcomeTestComponent {}

describe("WelcomeComponent", () => {
  let fixture: ComponentFixture<WelcomeTestComponent>;
  mockIntersectionObserver();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: VISIT_TIME,
          useValue: new Date("Jan 18 2024").getTime(),
        },
        {
          provide: CONSTANTS,
          useValue: constants,
        },
      ],
    });

    fixture = TestBed.createComponent(WelcomeTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const el = document.querySelector('[data-test="welcome"]') as HTMLElement;
    expect(el).toBeTruthy();
  });
});
