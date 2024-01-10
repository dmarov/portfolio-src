import {
  Component,
  AfterViewInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { InViewEffect } from "@/app/shared/utils/inview-effect/inview-effect";
import { UnfoldEffect } from "@/app/shared/utils/unfold-effect/unfold-effect";
import { Features } from "@/app/models/features/features.class";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class AboutMeComponent implements AfterViewInit {
  public readonly showWhatIStandFor = this.features.SHOW_WHAT_I_STAND_FOR;

  public constructor(private readonly features: Features) {}

  public ngAfterViewInit(): void {
    UnfoldEffect.init();
    InViewEffect.init();
  }
}
