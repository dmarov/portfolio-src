import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";
import { TrackingServiceMock } from "@/app/shared/services/tracking/tracking.service.mock";
import { ProductsComponent } from "./products.component";

@Component({
  selector: "app-products-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-products></app-products>",
  imports: [ProductsComponent],
})
export class AboutMeTestComponent {}

describe("ProductsComponent", () => {
  let fixture: ComponentFixture<AboutMeTestComponent>;
  mockIntersectionObserver();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TrackingService,
          useClass: TrackingServiceMock,
        },
      ],
    });

    fixture = TestBed.createComponent(AboutMeTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const el = document.querySelector('[data-test="products"]') as HTMLElement;

    expect(el).toBeTruthy();
  });
});
