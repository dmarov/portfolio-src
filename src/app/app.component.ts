import { CommonModule, DOCUMENT } from "@angular/common";
import { filter } from "rxjs/operators";
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router, NavigationEnd, RouterModule } from "@angular/router";
import { NgScrollbar, NgScrollbarModule } from "ngx-scrollbar";
import { HeaderComponent } from "./shared/components/header/header.component";
import { CustomTrackingEvent } from "./models/tracking/custom-tracking-event.enum";
import { TrackingService } from "./shared/services/tracking/tracking.service";
import { WINDOW } from "./shared/const/injection-tokens.const";

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
    @Inject(WINDOW)
    private readonly win: Window,
    @Inject(DOCUMENT)
    private readonly document: Document,
  ) { }

  public ngOnInit(): void {
    setTimeout(() => {
      this.autoScroll();

      this.router.events
        .pipe(filter((s) => s instanceof NavigationEnd))
        .subscribe(() => {
          this.autoScroll();
        });
    }, 100);
  }

  public onVisitGithubFooterClick(): void {
    this.tracking.sendCustomEvent(
      CustomTrackingEvent.VisitGithubFooterClick,
      {},
    );
  }

  private autoScroll(): void {
    const { hash } = this.win.location;
    const isIframe = this.win.self !== this.win.top;

    if (isIframe) {
      return;
    }

    if (hash) {
      const id = hash.replace(/^#/, "");

      this.scrollToId(id);
    } else {
      this.scrollToId("top-pivot");
    }
  }

  private scrollToId(id: string): void {
    setTimeout(() => {
      const target = this.document.getElementById(id);
      if (target) {
        target.scrollIntoView();
      }
    });
  }
}
