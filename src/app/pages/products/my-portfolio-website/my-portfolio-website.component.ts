import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import ResizeObserver from "resize-observer-polyfill";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";

@Component({
  selector: "app-my-portfolio-website",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./my-portfolio-website.component.html",
  styleUrls: ["./my-portfolio-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyPortfolioWebsiteComponent implements AfterViewInit {
  @ViewChild("container", { static: true })
  public readonly container!: ElementRef<HTMLTextAreaElement>;

  public styleTransform = "";

  public constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly tracking: TrackingService,
  ) {}

  public ngAfterViewInit(): void {
    setTimeout(() => {
      const observer = new ResizeObserver((entries) => {
        const { width } = entries[0].contentRect;
        this.styleTransform = `scale(${width / 1920})`;
        this.cdr.detectChanges();
      });

      observer.observe(this.container.nativeElement);
    });
  }

  public onRepoVisitClick(): void {
    this.tracking.sendCustomEvent(
      CustomTrackingEvent.VisitMyPortfolioRepositoryClick,
      {},
    );
  }
}
