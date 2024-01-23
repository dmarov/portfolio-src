import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { VmediaWebsiteComponent } from "./vmedia-website.component";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";
import { TrackingServiceMock } from "@/app/shared/services/tracking/tracking.service.mock";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";

@Component({
  selector: "app-vmedia-website-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-vmedia-website></app-vmedia-website>",
  imports: [VmediaWebsiteComponent],
})
export class VmediaWebsiteTestComponent {}

describe("VmediaWebsiteComponent", () => {
  let fixture: ComponentFixture<VmediaWebsiteTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VmediaWebsiteComponent],
      providers: [
        {
          provide: TrackingService,
          useClass: TrackingServiceMock,
        },
      ],
    });

    fixture = TestBed.createComponent(VmediaWebsiteTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const el = document.querySelector(
      '[data-test="vmedia-website"]',
    ) as HTMLElement;

    expect(el).toBeTruthy();
  });

  it("should emit VisitVmediaWebsiteClick event on link click", () => {
    const tracking = TestBed.inject(TrackingService);

    const spy = jest.spyOn(tracking, "sendCustomEvent");

    const el = document.querySelector(
      "[data-test='vmedia-website-link']",
    ) as HTMLElement;

    el.click();

    expect(spy).toHaveBeenCalledWith(
      CustomTrackingEvent.VisitVmediaWebsiteClick,
      {},
    );
  });
});
