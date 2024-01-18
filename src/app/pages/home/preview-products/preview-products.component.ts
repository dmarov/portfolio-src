import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";
import { ProductEntry } from "@/app/models/home/product-entry.interface";
import { RoutePath } from "@/app/models/routing/route-path.enum";

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

  public constructor(private readonly tracking: TrackingService) {}

  public onPreviewClick(event: CustomTrackingEvent): void {
    this.tracking.sendCustomEvent(event, {});
  }
}
