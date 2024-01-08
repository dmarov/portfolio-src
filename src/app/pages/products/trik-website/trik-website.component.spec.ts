import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TrikWebsiteComponent } from "./trik-website.component";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";
import { TrackingServiceMock } from "@/app/shared/services/tracking/tracking.service.mock";

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
          provide: TrackingService,
          useClass: TrackingServiceMock,
        },
      ],
    });
    fixture = TestBed.createComponent(TrikWebsiteTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const input = document.querySelector(
      '[data-test="trik-website"]',
    ) as HTMLElement;
    expect(input).toBeTruthy();
  });
});
