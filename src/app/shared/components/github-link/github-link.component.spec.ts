import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { TRACKING } from "../../const/injection-tokens.const";
import { GithubLinkComponent } from "./github-link.component";
import { TrackingServiceMock } from "../../services/tracking/tracking.service.mock";

@Component({
  selector: "app-github-link-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GithubLinkComponent],
  template: `
    <app-github-link
      [size]="40"
      [clickTrackingEvent]="events.VisitGithubHeaderClick"
    ></app-github-link>
  `,
})
export class GithubLinkTestComponent {
  public readonly events = CustomTrackingEvent;
}
describe("GithubLinkComponent", () => {
  let fixture: ComponentFixture<GithubLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TRACKING,
          useClass: TrackingServiceMock,
        },
      ],
    });

    fixture = TestBed.createComponent(GithubLinkComponent);
    fixture.detectChanges();
  });

  it("should have testing attribute", () => {
    const el = document.querySelector("[data-test='github-link']");

    expect(el).toBeTruthy();
  });

  it.skip("should emit VisitGithubHeaderClick event on github icon click", () => {
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
  });
});
