import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GoogleAnalytics } from "@/app/shared/utils/google-analytics/google-analytics";
import { TrackingEvents } from "@/app/models/tracking-events.enum";

@Component({
  selector: "app-rivertv-website",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./rivertv-website.component.html",
  styleUrls: ["./rivertv-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RivertvWebsiteComponent {
  public onVisitClick(): void {
    GoogleAnalytics.sendEvent(TrackingEvents.VisitRiverTvWebsiteClick, {});
  }
}
