import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";

@Component({
  selector: "app-vmedia-website",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./vmedia-website.component.html",
  styleUrls: ["./vmedia-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VmediaWebsiteComponent {
  public constructor(private readonly tracking: TrackingService) {}

  public onVisitClick(): void {
    this.tracking.sendCustomEvent(
      CustomTrackingEvent.VisitVmediaWebsiteClick,
      {},
    );
  }
}
