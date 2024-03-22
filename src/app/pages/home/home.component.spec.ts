import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import { TrackingServiceMock } from "@/shared/services/tracking/tracking.service.mock";
import { HomeComponent } from "./home.component";
import { CustomTrackingEvent } from "@/models/tracking/custom-tracking-event.enum";
import {
  CONSTANTS,
  TRACKING,
  VISIT_TIME,
} from "@/shared/const/injection-tokens.const";
import { ProductsComponent } from "../products/products.component";
import { RoutePath } from "@/models/routing/route-path.enum";
import { constants } from "@/shared/const/constants.const";

@Component({
  selector: "app-home-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-home></app-home>",
  imports: [HomeComponent],
})
export class HomeTestComponent {}

describe("HomeComponent", () => {
  let fixture: ComponentFixture<HomeTestComponent>;
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
        {
          provide: VISIT_TIME,
          useValue: new Date("Jan 18 2024").getTime(),
        },
        {
          provide: CONSTANTS,
          useValue: constants,
        },
      ],
    });

    fixture = TestBed.createComponent(HomeTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const el = document.querySelector('[data-test="home"]') as HTMLElement;

    expect(el).toBeTruthy();
  });

  it("should emit MoreProductsClick event on more products link click", () => {
    const tracking = TestBed.inject(TRACKING);

    const spy = jest.spyOn(tracking, "sendCustomEvent");

    const el = document.querySelector(
      "[data-test='home-more-products-link']",
    ) as HTMLElement;

    el.click();

    expect(spy).toHaveBeenCalledWith(CustomTrackingEvent.MoreProductsClick, {});
  });
});
