import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomTrackingEvent } from "@/models/tracking/custom-tracking-event.enum";
import { TRACKING } from "@/shared/const/injection-tokens.const";
import { TrackingInterface } from "@/shared/services/tracking/tracking.interface";

@Component({
  selector: "app-kemerovo-website",
  templateUrl: "./kemerovo-website.component.html",
  styleUrls: ["./kemerovo-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class KemerovoWebsiteComponent {
  public constructor(
    @Inject(TRACKING)
    private readonly tracking: TrackingInterface,
  ) {}

  public onVisitClick(): void {
    this.tracking.sendCustomEvent(
      CustomTrackingEvent.VisitKemerovoWebsiteClick,
      {},
    );
  }
}
