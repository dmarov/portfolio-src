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
import { TrackingEvents } from "@/app/models/tracking-events.enum";
import { GoogleAnalytics } from "@/app/shared/utils/tracking/google-analytics";

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
  public container!: ElementRef<HTMLTextAreaElement>;

  public styleTransform = "";

  public constructor(private readonly cdr: ChangeDetectorRef) {}

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

  public onVisitClick(): void {
    GoogleAnalytics.sendEvent(TrackingEvents.VisitMyPortfolioWebsiteClick, {});
  }

  public onRepoVisitClick(): void {
    GoogleAnalytics.sendEvent(
      TrackingEvents.VisitMyPortfolioRepositoryClick,
      {},
    );
  }
}
