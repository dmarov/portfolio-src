import { CommonModule } from "@angular/common";
import { filter } from "rxjs/operators";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router, NavigationEnd, RouterModule } from "@angular/router";
import { NgScrollbar, NgScrollbarModule } from "ngx-scrollbar";
import { HeaderComponent } from "./shared/components/header/header.component";
import { CustomTrackingEvent } from "./models/tracking/custom-tracking-event.enum";
import { TrackingService } from "./shared/services/tracking/tracking.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule, CommonModule, HeaderComponent, NgScrollbarModule],
})
export class AppComponent implements OnInit {
  @ViewChild(NgScrollbar)
  public readonly scrollbarRef!: NgScrollbar;

  public constructor(
    private readonly router: Router,
    private readonly tracking: TrackingService,
  ) { }

  public ngOnInit(): void {
    this.router.events
      .pipe(filter((s) => s instanceof NavigationEnd))
      .subscribe(() => {
        this.autoScroll();
      });
  }

  public onVisitGithubFooterClick(): void {
    this.tracking.sendCustomEvent(
      CustomTrackingEvent.VisitGithubFooterClick,
      {},
    );
  }

  private autoScroll(): void {
    const { hash } = window.location;
    const isIframe = window.self !== window.top;

    if (isIframe) {
      return;
    }

    if (hash) {
      const id = hash.replace(/#/, "");

      this.scrollToId(id);
    } else {
      this.scrollToId("top-pivot");
    }
  }

  private scrollToId(id: string): void {
    setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView();
      }
    });
  }
}
