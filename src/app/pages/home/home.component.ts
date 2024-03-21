import {
  Component,
  AfterViewInit,
  ChangeDetectionStrategy,
  Inject,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { UnfoldEffect } from "@/shared/utils/unfold-effect/unfold-effect";
import { CustomTrackingEvent } from "@/models/tracking/custom-tracking-event.enum";
import { RoutePath } from "@/models/routing/route-path.enum";
import { TechListComponent } from "./tech-list/tech-list.component";
import { PreviewProductsComponent } from "./preview-products/preview-products.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { TRACKING } from "@/shared/const/injection-tokens.const";
import { TrackingInterface } from "@/shared/services/tracking/tracking.interface";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterModule,
    TechListComponent,
    PreviewProductsComponent,
    WelcomeComponent,
  ],
})
export class HomeComponent implements AfterViewInit {
  public readonly routePath = RoutePath;

  public constructor(
    @Inject(TRACKING)
    private readonly tracking: TrackingInterface,
  ) {}

  public ngAfterViewInit(): void {
    UnfoldEffect.init();
  }

  public onMoreProductsClick(): void {
    this.tracking.sendCustomEvent(CustomTrackingEvent.MoreProductsClick, {});
  }
}
