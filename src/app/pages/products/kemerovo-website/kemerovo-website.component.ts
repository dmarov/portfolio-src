import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";

@Component({
  selector: "app-kemerovo-website",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./kemerovo-website.component.html",
  styleUrls: ["./kemerovo-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KemerovoWebsiteComponent {
  public constructor(private readonly tracking: TrackingService) {}

  public onVisitClick(): void {
    this.tracking.sendCustomEvent(
      CustomTrackingEvent.VisitKemerovoWebsiteClick,
      {},
    );
  }
}
