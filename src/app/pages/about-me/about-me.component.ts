import {
  Component,
  AfterViewInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { UnfoldEffect } from "@/shared/utils/unfold-effect/unfold-effect";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class AboutMeComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    UnfoldEffect.init();
  }
}
