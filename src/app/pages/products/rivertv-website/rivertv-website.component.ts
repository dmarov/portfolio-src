import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { TRACKING } from "@/app/shared/const/injection-tokens.const";
import { TrackingInterface } from "@/app/shared/services/tracking/tracking.interface";

@Component({
  selector: "app-rivertv-website",
  templateUrl: "./rivertv-website.component.html",
  styleUrls: ["./rivertv-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class RivertvWebsiteComponent {
  public constructor(
    @Inject(TRACKING) private readonly tracking: TrackingInterface,
  ) {}

  public onVisitClick(): void {
    this.tracking.sendCustomEvent(
      CustomTrackingEvent.VisitRiverTvWebsiteClick,
      {},
    );
  }
}
