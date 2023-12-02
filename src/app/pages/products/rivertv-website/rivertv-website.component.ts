import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
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
    window.userTracking.sendEvent(TrackingEvents.VisitRiverTvWebsiteClick, {});
  }
}
