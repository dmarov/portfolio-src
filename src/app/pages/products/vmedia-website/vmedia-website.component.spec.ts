import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { VmediaWebsiteComponent } from "./vmedia-website.component";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";
import { TrackingServiceMock } from "@/app/shared/services/tracking/tracking.service.mock";

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
    const input = document.querySelector(
      '[data-test="vmedia-website"]',
    ) as HTMLInputElement;
    expect(input).toBeTruthy();
  });
});
