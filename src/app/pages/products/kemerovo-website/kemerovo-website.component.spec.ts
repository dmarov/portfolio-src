import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";
import { TrackingServiceMock } from "@/app/shared/services/tracking/tracking.service.mock";
import { KemerovoWebsiteComponent } from "./kemerovo-website.component";

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
    const input = document.querySelector(
      '[data-test="kemerovo-website"]',
    ) as HTMLInputElement;
    expect(input).toBeTruthy();
  });
});
