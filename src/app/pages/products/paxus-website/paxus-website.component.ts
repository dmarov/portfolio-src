import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomTrackingEvent } from "@/models/tracking/custom-tracking-event.enum";
import { TRACKING } from "@/shared/const/injection-tokens.const";
import { TrackingInterface } from "@/shared/services/tracking/tracking.interface";

@Component({
  selector: "app-paxus-website",
  templateUrl: "./paxus-website.component.html",
  styleUrls: ["./paxus-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class PaxusWebsiteComponent {
  public constructor(
    @Inject(TRACKING)
    private readonly tracking: TrackingInterface,
  ) {}

  public onVisitClick(): void {
    this.tracking.sendCustomEvent(
      CustomTrackingEvent.VisitPaxusWebsiteClick,
      {},
    );
  }
}
