import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GoogleAnalytics } from "@/app/shared/utils/google-analytics/google-analytics";
import { TrackingEvents } from "@/app/models/tracking-events.enum";

@Component({
  selector: "app-paxus-website",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./paxus-website.component.html",
  styleUrls: ["./paxus-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaxusWebsiteComponent {
  public onVisitClick(): void {
    GoogleAnalytics.sendEvent(TrackingEvents.VisitPaxusWebsiteClick, {});
  }
}
