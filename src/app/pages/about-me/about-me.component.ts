import {
  Component,
  AfterViewInit,
  HostBinding,
  ChangeDetectionStrategy,
} from "@angular/core";
import { InViewEffect } from "@/app/shared/utils/inview-effect";
import { UnfoldEffect } from "@/app/shared/utils/unfold-effect";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AboutMeComponent implements AfterViewInit {
  @HostBinding("class")
  public classes = "app__page";

  public ngAfterViewInit(): void {
    UnfoldEffect.init();
    InViewEffect.init();
  }
}
