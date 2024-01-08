import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { MenuService } from "../../services/menu/menu.service";
import { MenuServiceMock } from "../../services/menu/menu.service.mock";
import { TrackingService } from "../../services/tracking/tracking.service";
import { TrackingServiceMock } from "../../services/tracking/tracking.service.mock";
import { HeaderComponent } from "./header.component";

@Component({
  selector: "app-header-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderComponent],
  template: `<app-header></app-header>`,
})
export class HeaderTestComponent {}
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
