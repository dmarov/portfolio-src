import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  ViewChild,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import ResizeObserver from "resize-observer-polyfill";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { TrackingInterface } from "@/app/shared/services/tracking/tracking.interface";
import { TRACKING } from "@/app/shared/const/injection-tokens.const";

@Component({
  selector: "app-my-portfolio-website",
  templateUrl: "./my-portfolio-website.component.html",
  styleUrls: ["./my-portfolio-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class MyPortfolioWebsiteComponent implements AfterViewInit {
  @ViewChild("container", { static: true })
  public readonly container!: ElementRef<HTMLDivElement>;

  public styleTransform = "";

  public constructor(
    private readonly cdr: ChangeDetectorRef,
    @Inject(TRACKING)
    private readonly tracking: TrackingInterface,
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
