import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";
import { TrackingServiceMock } from "@/app/shared/services/tracking/tracking.service.mock";
import { KemerovoWebsiteComponent } from "./kemerovo-website.component";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";

@Component({
  selector: "app-kemerovo-website-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-kemerovo-website></app-kemerovo-website>",
  imports: [KemerovoWebsiteComponent],
})
export class KemerovoWebsiteTestComponent {}

describe("KemerovoWebsiteComponent", () => {
  let fixture: ComponentFixture<KemerovoWebsiteTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TrackingService,
          useClass: TrackingServiceMock,
        },
      ],
    });

    fixture = TestBed.createComponent(KemerovoWebsiteTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const el = document.querySelector(
      '[data-test="kemerovo-website"]',
    ) as HTMLElement;

    expect(el).toBeTruthy();
  });

  it("should emit VisitKemerovoWebsiteClick event on link click", () => {
    const tracking = TestBed.inject(TrackingService);

    const spy = jest.spyOn(tracking, "sendCustomEvent");

    const el = document.querySelector(
      "[data-test='kemerovo-website-link']",
    ) as HTMLElement;

    el.click();

    expect(spy).toHaveBeenCalledWith(
      CustomTrackingEvent.VisitKemerovoWebsiteClick,
      {},
    );
  });
});
