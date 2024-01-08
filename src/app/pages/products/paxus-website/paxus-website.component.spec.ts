import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";
import { TrackingServiceMock } from "@/app/shared/services/tracking/tracking.service.mock";
import { PaxusWebsiteComponent } from "./paxus-website.component";

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
          provide: TrackingService,
          useClass: TrackingServiceMock,
        },
      ],
    });
    fixture = TestBed.createComponent(PaxusWebsiteTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const input = document.querySelector(
      '[data-test="paxus-website"]',
    ) as HTMLInputElement;
    expect(input).toBeTruthy();
  });
});
