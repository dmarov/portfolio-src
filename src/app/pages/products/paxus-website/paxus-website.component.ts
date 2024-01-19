import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";

@Component({
  selector: "app-paxus-website",
  templateUrl: "./paxus-website.component.html",
  styleUrls: ["./paxus-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class PaxusWebsiteComponent {
  public constructor(private readonly tracking: TrackingService) {}

  public onVisitClick(): void {
    this.tracking.sendCustomEvent(
      CustomTrackingEvent.VisitPaxusWebsiteClick,
      {},
    );
  }
}
