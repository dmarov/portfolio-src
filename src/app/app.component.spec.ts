import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { CustomTrackingEvent } from "./models/tracking/custom-tracking-event.enum";
import {
  LANGUAGE_SWITCH,
  MENU_STATE,
  TRACKING,
  WINDOW,
} from "./shared/const/injection-tokens.const";
import { LanguageSwitchServiceMock } from "./shared/services/language-switch/language-switch.service.mock";
import { MenuStateServiceMock } from "./shared/services/menu/menu-state.service.mock";
import { TrackingServiceMock } from "./shared/services/tracking/tracking.service.mock";

@Component({
  selector: "app-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-root></app-root>",
  imports: [AppComponent],
})
export class AppTestComponent {}

describe("AppComponent", () => {
  let fixture: ComponentFixture<AppTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule, NoopAnimationsModule],
      providers: [
        {
          provide: TRACKING,
          useClass: TrackingServiceMock,
        },
        {
          provide: MENU_STATE,
          useClass: MenuStateServiceMock,
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

    fixture = TestBed.createComponent(AppTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const el = document.querySelector('[data-test="app"]') as HTMLElement;

    expect(el).toBeTruthy();
  });

  it("should emit VisitGithubFooterClick event on github footer link click", () => {
    const tracking = TestBed.inject(TRACKING);

    const spy = jest.spyOn(tracking, "sendCustomEvent");

    const el = document.querySelector(
      "[data-test='visit-github-footer-link']",
    ) as HTMLElement;

    el.click();

    expect(spy).toHaveBeenCalledWith(
      CustomTrackingEvent.VisitGithubFooterClick,
      {},
    );
  });
});
