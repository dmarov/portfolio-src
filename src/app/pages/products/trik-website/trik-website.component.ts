import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomTrackingEvent } from "@/app/models/custom-tracking-event.enum";

@Component({
  selector: "app-trik-website",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./trik-website.component.html",
  styleUrls: ["./trik-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrikWebsiteComponent {
  public onVisitClick(): void {
    window.userTracking.sendCustomEvent(
      CustomTrackingEvent.VisitTrikWebsiteClick,
      {},
    );
  }
}
