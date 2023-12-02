import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomTrackingEvent } from "@/app/models/custom-tracking-event.enum";

@Component({
  selector: "app-vmedia-website",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./vmedia-website.component.html",
  styleUrls: ["./vmedia-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VmediaWebsiteComponent {
  public onVisitClick(): void {
    window.userTracking.sendCustomEvent(
      CustomTrackingEvent.VisitVmediaWebsiteClick,
      {},
    );
  }
}
