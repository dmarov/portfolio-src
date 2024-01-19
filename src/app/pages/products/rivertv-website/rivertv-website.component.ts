import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";

@Component({
  selector: "app-rivertv-website",
  templateUrl: "./rivertv-website.component.html",
  styleUrls: ["./rivertv-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class RivertvWebsiteComponent {
  public constructor(private readonly tracking: TrackingService) {}

  public onVisitClick(): void {
    this.tracking.sendCustomEvent(
      CustomTrackingEvent.VisitRiverTvWebsiteClick,
      {},
    );
  }
}
