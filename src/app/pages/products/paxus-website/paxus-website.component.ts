import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomTrackingEvent } from "@/app/models/custom-tracking-event.enum";

@Component({
  selector: "app-paxus-website",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./paxus-website.component.html",
  styleUrls: ["./paxus-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaxusWebsiteComponent {
  public onVisitClick(): void {
    window.userTracking.sendCustomEvent(
      CustomTrackingEvent.VisitPaxusWebsiteClick,
      {},
    );
  }
}
