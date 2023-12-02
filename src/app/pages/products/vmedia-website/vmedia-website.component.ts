import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GoogleAnalytics } from "@/app/shared/utils/google-analytics/google-analytics";
import { TrackingEvents } from "@/app/models/tracking-events.enum";

@Component({
  selector: "app-vmedia-website",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./vmedia-website.component.html",
  styleUrls: ["./vmedia-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VmediaWebsiteComponent {
  public onVisitClick(): void {
    GoogleAnalytics.sendEvent(TrackingEvents.VisitVmediaWebsiteClick, {});
  }
}
