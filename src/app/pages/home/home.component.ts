import {
  Component,
  AfterViewInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { InViewEffect } from "@/app/shared/utils/inview-effect/inview-effect";
import { UnfoldEffect } from "@/app/shared/utils/unfold-effect/unfold-effect";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { RoutePath } from "@/app/models/routing/route-path.enum";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";
import { TechListComponent } from "./tech-list/tech-list.component";
import { PreviewProductsComponent } from "./preview-products/preview-products.component";
import { WelcomeComponent } from "./welcome/welcome.component";

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

  public constructor(private readonly tracking: TrackingService) {}

  public ngAfterViewInit(): void {
    UnfoldEffect.init();
    InViewEffect.init();
  }

  public onMoreProductsClick(): void {
    this.tracking.sendCustomEvent(CustomTrackingEvent.MoreProductsClick, {});
  }
}
