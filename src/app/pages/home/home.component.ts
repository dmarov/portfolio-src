import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { InViewEffect } from "@/app/shared/utils/inview-effect/inview-effect";
import { UnfoldEffect } from "@/app/shared/utils/unfold-effect/unfold-effect";
import { environment } from "@/environments/environment";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { RoutePath } from "@/app/models/routing/route-path.enum";
import { msInYear } from "@/app/shared/const/ms-in-year.const";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule],
})
export class HomeComponent implements OnInit, AfterViewInit {
  public readonly routePath = RoutePath;

  public years = 0;

  private readonly startDate = new Date(environment.dateBeginning);

  public ngOnInit(): void {
    const years = (Date.now() - this.startDate.getTime()) / msInYear;

    this.years = Math.floor(years);
  }

  public ngAfterViewInit(): void {
    UnfoldEffect.init();
    InViewEffect.init();
  }

  public onPreviewRobotsClick(): void {
    window.userTracking.sendCustomEvent(
      CustomTrackingEvent.PreviewRobotsClick,
      {},
    );
  }

  public onPreviewRivertvClick(): void {
    window.userTracking.sendCustomEvent(
      CustomTrackingEvent.PreviewRivertvClick,
      {},
    );
  }

  public onPreviewVmediaClick(): void {
    window.userTracking.sendCustomEvent(
      CustomTrackingEvent.PreviewVmediaClick,
      {},
    );
  }

  public onPreviewPaxusClick(): void {
    window.userTracking.sendCustomEvent(
      CustomTrackingEvent.PreviewPaxusClick,
      {},
    );
  }

  public onMoreProductsClick(): void {
    window.userTracking.sendCustomEvent(
      CustomTrackingEvent.MoreProductsClick,
      {},
    );
  }
}
