import {
  Component,
  OnInit,
  AfterViewInit,
  HostBinding,
  ChangeDetectionStrategy,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { InViewEffect } from "@/shared/utils/inview-effect";
import { UnfoldEffect } from "@/shared/utils/unfold-effect";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterModule,
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @HostBinding("class")
  public classes = "app-layout__page page-main";

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
