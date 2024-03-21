import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MyPortfolioWebsiteComponent } from "./my-portfolio-website.component";
import { TrackingServiceMock } from "@/shared/services/tracking/tracking.service.mock";
import { CustomTrackingEvent } from "@/models/tracking/custom-tracking-event.enum";
import { TRACKING } from "@/shared/const/injection-tokens.const";

@Component({
  selector: "app-kemerovo-website-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-my-portfolio-website></app-my-portfolio-website>",
  imports: [MyPortfolioWebsiteComponent],
})
export class MyPortfolioWebsiteTestComponent {}

describe("MyPortfolioWebsiteComponent", () => {
  let fixture: ComponentFixture<MyPortfolioWebsiteTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TRACKING,
          useClass: TrackingServiceMock,
        },
      ],
    });

    fixture = TestBed.createComponent(MyPortfolioWebsiteTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const el = document.querySelector(
      '[data-test="my-portfolio-website"]',
    ) as HTMLElement;

    expect(el).toBeTruthy();
  });

  it("should emit VisitMyPortfolioRepositoryClick event on repository link click", () => {
    const tracking = TestBed.inject(TRACKING);

    const spy = jest.spyOn(tracking, "sendCustomEvent");

    const el = document.querySelector(
      "[data-test='my-portfolio-repository-link']",
    ) as HTMLElement;

    el.click();

    expect(spy).toHaveBeenCalledWith(
      CustomTrackingEvent.VisitMyPortfolioRepositoryClick,
      {},
    );
  });
});
