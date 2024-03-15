import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import { TrackingServiceMock } from "@/app/shared/services/tracking/tracking.service.mock";
import { ProductsComponent } from "./products.component";
import { TRACKING } from "@/app/shared/const/injection-tokens.const";

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
          provide: TRACKING,
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
