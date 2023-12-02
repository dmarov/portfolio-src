import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrackingEvents } from "@/app/models/tracking-events.enum";

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
    window.tracking.sendEvent(TrackingEvents.VisitKemerovoWebsiteClick, {});
  }
}
