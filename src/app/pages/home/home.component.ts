import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { InViewEffect } from "@/app/shared/utils/inview-effect/inview-effect";
import { UnfoldEffect } from "@/app/shared/utils/unfold-effect/unfold-effect";
import { RoutePath } from "@/app/models/route-path.enum";
import { environment } from "@/environments/environment";
import { GoogleAnalytics } from "@/app/shared/utils/google-analytics/google-analytics";
import { TrackingEvents } from "@/app/models/tracking-events.enum";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule],
})
export class HomeComponent implements OnInit, AfterViewInit {
  public routePath = RoutePath;

  private startDate = new Date(environment.dateBeginning);

  public years = 0;

  public ngOnInit(): void {
    const msInYear = 1000 * 60 * 60 * 24 * 365;
    const years = (Date.now() - this.startDate.getTime()) / msInYear;

    this.years = Math.floor(years);
  }

  public ngAfterViewInit(): void {
    UnfoldEffect.init();
    InViewEffect.init();
  }

  public onPreviewRobotsClick(): void {
    GoogleAnalytics.sendEvent(TrackingEvents.PreviewRobotsClick, {});
  }

  public onPreviewRivertvClick(): void {
    GoogleAnalytics.sendEvent(TrackingEvents.PreviewRivertvClick, {});
  }

  public onPreviewVmediaClick(): void {
    GoogleAnalytics.sendEvent(TrackingEvents.PreviewVmediaClick, {});
  }

  public onPreviewPaxusClick(): void {
    GoogleAnalytics.sendEvent(TrackingEvents.PreviewPaxusClick, {});
  }

  public onMoreProductsClick(): void {
    GoogleAnalytics.sendEvent(TrackingEvents.MoreProductsClick, {});
  }
}
