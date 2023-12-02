import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrackingEvents } from "@/app/models/tracking-events.enum";
import { GoogleAnalytics } from "@/app/shared/utils/tracking/google-analytics";

@Component({
  selector: "app-kemerovo-website",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./kemerovo-website.component.html",
  styleUrls: ["./kemerovo-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KemerovoWebsiteComponent {
  public onVisitClick(): void {
    GoogleAnalytics.sendEvent(TrackingEvents.VisitKemerovoWebsiteClick, {});
  }
}
