import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomTrackingEvent } from "@/models/tracking/custom-tracking-event.enum";
import { TrackingInterface } from "@/shared/services/tracking/tracking.interface";
import { TRACKING } from "@/shared/const/injection-tokens.const";

@Component({
  selector: "app-trik-website",
  templateUrl: "./trik-website.component.html",
  styleUrls: ["./trik-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class TrikWebsiteComponent {
  public constructor(
    @Inject(TRACKING)
    private readonly tracking: TrackingInterface,
  ) {}

  public onVisitClick(): void {
    this.tracking.sendCustomEvent(
      CustomTrackingEvent.VisitTrikWebsiteClick,
      {},
    );
  }
}
