import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TrikWebsiteComponent } from "./trik-website.component";
import { TrackingServiceMock } from "@/shared/services/tracking/tracking.service.mock";
import { CustomTrackingEvent } from "@/models/tracking/custom-tracking-event.enum";
import { TRACKING } from "@/shared/const/injection-tokens.const";

@Component({
  selector: "app-trik-website-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-trik-website></app-trik-website>",
  imports: [TrikWebsiteComponent],
})
export class TrikWebsiteTestComponent {}

describe("TrikWebsiteComponent", () => {
  let fixture: ComponentFixture<TrikWebsiteTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TrikWebsiteComponent],
      providers: [
        {
          provide: TRACKING,
          useClass: TrackingServiceMock,
        },
      ],
    });

    fixture = TestBed.createComponent(TrikWebsiteTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const el = document.querySelector(
      '[data-test="trik-website"]',
    ) as HTMLElement;

    expect(el).toBeTruthy();
  });

  it("should emit VisitTrikWebsiteClick event on link click", () => {
    const tracking = TestBed.inject(TRACKING);

    const spy = jest.spyOn(tracking, "sendCustomEvent");

    const el = document.querySelector(
      "[data-test='trik-website-link']",
    ) as HTMLElement;

    el.click();

    expect(spy).toHaveBeenCalledWith(
      CustomTrackingEvent.VisitTrikWebsiteClick,
      {},
    );
  });
});
