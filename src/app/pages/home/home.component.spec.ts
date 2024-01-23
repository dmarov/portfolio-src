import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";
import { TrackingServiceMock } from "@/app/shared/services/tracking/tracking.service.mock";
import { HomeComponent } from "./home.component";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import {
  ENVIRONMENT,
  VISIT_TIME,
} from "@/app/shared/const/injection-tokens.const";
import { mockEnvironment } from "@/environments/environment.mock";

@Component({
  selector: "app-home-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-home></app-home>",
  imports: [HomeComponent],
})
export class HomeTestComponent {}

describe("HomeComponent", () => {
  let fixture: ComponentFixture<HomeTestComponent>;
  mockIntersectionObserver();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: TrackingService,
          useClass: TrackingServiceMock,
        },
        {
          provide: VISIT_TIME,
          useValue: new Date("Jan 18 2024").getTime(),
        },
        {
          provide: ENVIRONMENT,
          useValue: mockEnvironment,
        },
      ],
    });

    fixture = TestBed.createComponent(HomeTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const el = document.querySelector('[data-test="home"]') as HTMLElement;

    expect(el).toBeTruthy();
  });

  it("should emit MoreProductsClick event on more products link click", () => {
    const tracking = TestBed.inject(TrackingService);

    const spy = jest.spyOn(tracking, "sendCustomEvent");

    const el = document.querySelector(
      "[data-test='home-more-products-link']",
    ) as HTMLElement;

    el.click();

    expect(spy).toHaveBeenCalledWith(CustomTrackingEvent.MoreProductsClick, {});
  });
});
