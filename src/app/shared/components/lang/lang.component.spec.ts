import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import {
  LANGUAGE_SWITCH,
  TRACKING,
  WINDOW,
} from "../../const/injection-tokens.const";
import { LanguageSwitchServiceMock } from "../../services/language-switch/language-switch.service.mock";
import { TrackingServiceMock } from "../../services/tracking/tracking.service.mock";
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
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TRACKING,
          useClass: TrackingServiceMock,
        },
        {
          provide: LANGUAGE_SWITCH,
          useClass: LanguageSwitchServiceMock,
        },
        {
          provide: WINDOW,
          useValue: window,
        },
      ],
    });

    fixture = TestBed.createComponent(LangTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const el = document.querySelector('[data-test="lang"]') as HTMLElement;

    expect(el).toBeTruthy();
  });
});
