import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TrackingServiceMock } from "@/app/shared/services/tracking/tracking.service.mock";
import { PaxusWebsiteComponent } from "./paxus-website.component";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { TRACKING } from "@/app/shared/const/injection-tokens.const";

@Component({
  selector: "app-paxus-website-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-paxus-website></app-paxus-website>",
  imports: [PaxusWebsiteComponent],
})
export class PaxusWebsiteTestComponent {}

describe("PaxusWebsiteComponent", () => {
  let fixture: ComponentFixture<PaxusWebsiteTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TRACKING,
          useClass: TrackingServiceMock,
        },
      ],
    });

    fixture = TestBed.createComponent(PaxusWebsiteTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const el = document.querySelector(
      '[data-test="paxus-website"]',
    ) as HTMLElement;

    expect(el).toBeTruthy();
  });

  it("should emit VisitPaxusWebsiteClick event on link click", () => {
    const tracking = TestBed.inject(TRACKING);

    const spy = jest.spyOn(tracking, "sendCustomEvent");

    const el = document.querySelector(
      "[data-test='paxus-website-link']",
    ) as HTMLElement;

    el.click();

    expect(spy).toHaveBeenCalledWith(
      CustomTrackingEvent.VisitPaxusWebsiteClick,
      {},
    );
  });
});
