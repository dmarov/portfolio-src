import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TrackingServiceMock } from "@/shared/services/tracking/tracking.service.mock";
import { KemerovoWebsiteComponent } from "./kemerovo-website.component";
import { CustomTrackingEvent } from "@/models/tracking/custom-tracking-event.enum";
import { TRACKING } from "@/shared/const/injection-tokens.const";

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
          provide: TRACKING,
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
    const tracking = TestBed.inject(TRACKING);

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
