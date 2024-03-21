import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { TRACKING } from "../../const/injection-tokens.const";
import { TrackingInterface } from "../../services/tracking/tracking.interface";
import { CustomTrackingEvent } from "@/models/tracking/custom-tracking-event.enum";

@Component({
  selector: "app-github-link",
  templateUrl: "./github-link.component.html",
  styleUrls: ["./github-link.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class GithubLinkComponent {
  @Input({ required: true })
  public readonly size!: number;

  @Input({ required: true })
  public readonly clickTrackingEvent!: CustomTrackingEvent;

  public constructor(
    @Inject(TRACKING)
    private readonly tracking: TrackingInterface,
  ) {}

  public onClick(): void {
    this.tracking.sendCustomEvent(this.clickTrackingEvent, {});
  }
}
