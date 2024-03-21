import { Component, ChangeDetectionStrategy, Inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { CustomTrackingEvent } from "@/models/tracking/custom-tracking-event.enum";
import { ProductEntry } from "@/models/home/product-entry.interface";
import { RoutePath } from "@/models/routing/route-path.enum";
import { TRACKING } from "@/shared/const/injection-tokens.const";
import { TrackingInterface } from "@/shared/services/tracking/tracking.interface";

@Component({
  selector: "app-preview-products",
  templateUrl: "./preview-products.component.html",
  styleUrls: ["./preview-products.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class PreviewProductsComponent {
  public readonly routePath = RoutePath;

  public readonly products: ReadonlyArray<ProductEntry> = [
    {
      testAttr: "robots",
      fragment: "robots",
      trackingEvent: CustomTrackingEvent.PreviewRobotsClick,
      alt: "Robots",
      image: "robots.png",
    },
    {
      testAttr: "rivertv",
      fragment: "rivertv",
      trackingEvent: CustomTrackingEvent.PreviewRivertvClick,
      alt: "RiverTV",
      image: "rivertv.png",
    },
    {
      testAttr: "vmedia",
      fragment: "vmedia",
      trackingEvent: CustomTrackingEvent.PreviewVmediaClick,
      alt: "VMedia",
      image: "vmedia.png",
    },
    {
      testAttr: "paxus",
      fragment: "paxus",
      trackingEvent: CustomTrackingEvent.PreviewPaxusClick,
      alt: "Paxus",
      image: "paxus.png",
    },
  ];

  public constructor(
    @Inject(TRACKING)
    private readonly tracking: TrackingInterface,
  ) {}

  public onPreviewClick(event: CustomTrackingEvent): void {
    this.tracking.sendCustomEvent(event, {});
  }
}
