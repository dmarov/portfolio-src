import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { MenuService } from "../../services/menu/menu.service";
import { MenuServiceMock } from "../../services/menu/menu.service.mock";
import { TrackingService } from "../../services/tracking/tracking.service";
import { TrackingServiceMock } from "../../services/tracking/tracking.service.mock";
import { HeaderComponent } from "./header.component";
import { LanguageSwitchService } from "../../services/language-switch/language-switch.service";
import { LanguageSwitchServiceMock } from "../../services/language-switch/language-switch.service.mock";
import { WINDOW } from "../../const/injection-tokens.const";

@Component({
  selector: "app-header-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderComponent],
  template: `<app-header></app-header>`,
})
export class HeaderTestComponent { }
describe("HeaderComponent", () => {
  let fixture: ComponentFixture<HeaderTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NoopAnimationsModule],
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
          provide: LanguageSwitchService,
          useClass: LanguageSwitchServiceMock,
        },
        {
          provide: WINDOW,
          useValue: window,
        },
      ],
    });

    fixture = TestBed.createComponent(HeaderTestComponent);
    fixture.detectChanges();
  });

  it("should have testing attribute", () => {
    const el = document.querySelector("[data-test='header']");

    expect(el).toBeTruthy();
  });

  it("should emit VisitGithubHeaderClick event on github icon click", () => {
    const tracking = TestBed.inject(TrackingService);

    const spy = jest.spyOn(tracking, "sendCustomEvent");

    const el = document.querySelector(
      "[data-test='header-github-icon']",
    ) as HTMLElement;

    el.click();

    expect(spy).toHaveBeenCalledWith(
      CustomTrackingEvent.VisitGithubHeaderClick,
      {},
    );
  });
});
