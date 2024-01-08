import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";
import { TrackingServiceMock } from "@/app/shared/services/tracking/tracking.service.mock";
import { HomeComponent } from "./home.component";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";

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
      ],
    });
    fixture = TestBed.createComponent(HomeTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const input = document.querySelector('[data-test="home"]') as HTMLElement;
    expect(input).toBeTruthy();
  });

  it("should emit PreviewRobotsClick event on preview robots click", () => {
    const tracking = TestBed.inject(TrackingService);

    const spy = jest.spyOn(tracking, "sendCustomEvent");

    const el = document.querySelector(
      "[data-test='home-preview-robots']",
    ) as HTMLElement;

    el.click();

    expect(spy).toHaveBeenCalledWith(
      CustomTrackingEvent.PreviewRobotsClick,
      {},
    );
  });

  it("should emit PreviewRiverTvClick event on preview rivertv click", () => {
    const tracking = TestBed.inject(TrackingService);

    const spy = jest.spyOn(tracking, "sendCustomEvent");

    const el = document.querySelector(
      "[data-test='home-preview-rivertv']",
    ) as HTMLElement;

    el.click();

    expect(spy).toHaveBeenCalledWith(
      CustomTrackingEvent.PreviewRivertvClick,
      {},
    );
  });

  it("should emit PreviewVmediaClick event on preview vmedia click", () => {
    const tracking = TestBed.inject(TrackingService);

    const spy = jest.spyOn(tracking, "sendCustomEvent");

    const el = document.querySelector(
      "[data-test='home-preview-vmedia']",
    ) as HTMLElement;

    el.click();

    expect(spy).toHaveBeenCalledWith(
      CustomTrackingEvent.PreviewVmediaClick,
      {},
    );
  });

  it("should emit PreviewPaxusClick event on preview paxus click", () => {
    const tracking = TestBed.inject(TrackingService);

    const spy = jest.spyOn(tracking, "sendCustomEvent");

    const el = document.querySelector(
      "[data-test='home-preview-paxus']",
    ) as HTMLElement;

    el.click();

    expect(spy).toHaveBeenCalledWith(CustomTrackingEvent.PreviewPaxusClick, {});
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
