import {
  Component,
  OnInit,
  AfterViewInit,
  HostBinding,
  ChangeDetectionStrategy,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { InViewEffect } from "@/app/shared/utils/inview-effect";
import { UnfoldEffect } from "@/app/shared/utils/unfold-effect";
import { RoutePath } from "@/app/models/route-path.enum";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @HostBinding("class")
  public classes = "app__page";

  public routePath = RoutePath;

  private startDate = new Date("June 17, 2017 00:00:00");

  public years = 0;

  public ngOnInit(): void {
    const years =
      (Date.now() - this.startDate.getTime()) / (1000 * 60 * 60 * 24 * 365);

    this.years = Math.floor(years);
  }

  public ngAfterViewInit(): void {
    UnfoldEffect.init();
    InViewEffect.init();
  }
}
