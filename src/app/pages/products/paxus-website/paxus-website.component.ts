import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrackingEvents } from "@/app/models/tracking-events.enum";
import { GoogleAnalytics } from "@/app/shared/utils/tracking/google-analytics";

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
