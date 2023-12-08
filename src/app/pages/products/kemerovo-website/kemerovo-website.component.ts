import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";

@Component({
  selector: "app-kemerovo-website",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./kemerovo-website.component.html",
  styleUrls: ["./kemerovo-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KemerovoWebsiteComponent {
  public onVisitClick(): void {
    window.userTracking.sendCustomEvent(
      CustomTrackingEvent.VisitKemerovoWebsiteClick,
      {},
    );
  }
}
