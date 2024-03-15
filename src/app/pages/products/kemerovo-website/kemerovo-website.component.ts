import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { TRACKING } from "@/app/shared/const/injection-tokens.const";
import { TrackingInterface } from "@/app/shared/services/tracking/tracking.interface";

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
