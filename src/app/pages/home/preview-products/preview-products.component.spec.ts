import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import { TrackingServiceMock } from "@/shared/services/tracking/tracking.service.mock";
import { CustomTrackingEvent } from "@/models/tracking/custom-tracking-event.enum";
import { PreviewProductsComponent } from "./preview-products.component";
import { TRACKING } from "@/shared/const/injection-tokens.const";
import { RoutePath } from "@/models/routing/route-path.enum";
import { ProductsComponent } from "../../products/products.component";

@Component({
  selector: "app-preview-products-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-preview-products></app-preview-products>",
  imports: [PreviewProductsComponent],
})
export class PreviewProductsTestComponent {}

describe("PreviewProductsComponent", () => {
  let fixture: ComponentFixture<PreviewProductsTestComponent>;
  mockIntersectionObserver();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([
          {
            path: RoutePath.Products,
            component: ProductsComponent,
          },
        ]),
      ],
      providers: [
        {
          provide: TRACKING,
          useClass: TrackingServiceMock,
        },
      ],
    });
    fixture = TestBed.createComponent(PreviewProductsTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const el = document.querySelector(
      '[data-test="preview-products"]',
    ) as HTMLElement;
    expect(el).toBeTruthy();
  });

  it("should emit PreviewRobotsClick event on preview robots click", () => {
    const tracking = TestBed.inject(TRACKING);

    const spy = jest.spyOn(tracking, "sendCustomEvent");

    const el = document.querySelector(
      "[data-test='preview-products-robots']",
    ) as HTMLElement;

    el.click();

    expect(spy).toHaveBeenCalledWith(
      CustomTrackingEvent.PreviewRobotsClick,
      {},
    );
  });

  it("should emit PreviewRiverTvClick event on preview rivertv click", () => {
    const tracking = TestBed.inject(TRACKING);

    const spy = jest.spyOn(tracking, "sendCustomEvent");

    const el = document.querySelector(
      "[data-test='preview-products-rivertv']",
    ) as HTMLElement;

    el.click();

    expect(spy).toHaveBeenCalledWith(
      CustomTrackingEvent.PreviewRivertvClick,
      {},
    );
  });

  it("should emit PreviewVmediaClick event on preview vmedia click", () => {
    const tracking = TestBed.inject(TRACKING);

    const spy = jest.spyOn(tracking, "sendCustomEvent");

    const el = document.querySelector(
      "[data-test='preview-products-vmedia']",
    ) as HTMLElement;

    el.click();

    expect(spy).toHaveBeenCalledWith(
      CustomTrackingEvent.PreviewVmediaClick,
      {},
    );
  });

  it("should emit PreviewPaxusClick event on preview paxus click", () => {
    const tracking = TestBed.inject(TRACKING);

    const spy = jest.spyOn(tracking, "sendCustomEvent");

    const el = document.querySelector(
      "[data-test='preview-products-paxus']",
    ) as HTMLElement;

    el.click();

    expect(spy).toHaveBeenCalledWith(CustomTrackingEvent.PreviewPaxusClick, {});
  });
});
