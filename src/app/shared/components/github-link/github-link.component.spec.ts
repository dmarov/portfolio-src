import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CustomTrackingEvent } from "@/models/tracking/custom-tracking-event.enum";
import { TRACKING } from "../../const/injection-tokens.const";
import { GithubLinkComponent } from "./github-link.component";
import { TrackingServiceMock } from "../../services/tracking/tracking.service.mock";

@Component({
  selector: "app-github-link-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GithubLinkComponent],
  template: `
    <app-github-link [size]="40" [clickTrackingEvent]="event"></app-github-link>
  `,
})
export class GithubLinkTestComponent {
  public readonly event = CustomTrackingEvent.VisitGithubHeaderClick;
}
describe("GithubLinkComponent", () => {
  let fixture: ComponentFixture<GithubLinkTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TRACKING,
          useClass: TrackingServiceMock,
        },
      ],
    });

    fixture = TestBed.createComponent(GithubLinkTestComponent);
    fixture.detectChanges();
  });

  it("should have testing attribute", () => {
    const el = document.querySelector("[data-test='github-link']");

    expect(el).toBeTruthy();
  });

  it("should emit VisitGithubHeaderClick event on github icon click", (done) => {
    const tracking = TestBed.inject(TRACKING);

    const spy = jest.spyOn(tracking, "sendCustomEvent");

    const el = document.querySelector(
      "[data-test='github-link']",
    ) as HTMLElement;

    el.click();

    expect(spy).toHaveBeenCalledWith(
      CustomTrackingEvent.VisitGithubHeaderClick,
      {},
    );

    done();
  });
});
