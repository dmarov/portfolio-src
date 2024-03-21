import { CommonModule, DOCUMENT } from "@angular/common";
import { filter } from "rxjs/operators";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router, NavigationEnd, RouterModule } from "@angular/router";
import { NgScrollbar, NgScrollbarModule } from "ngx-scrollbar";
import { HeaderComponent } from "@/shared/components/header/header.component";
import { CustomTrackingEvent } from "@/models/tracking/custom-tracking-event.enum";
import {
  MENU_STATE,
  TRACKING,
  WINDOW,
} from "@/shared/const/injection-tokens.const";
import { MenuStateInterface } from "@/shared/services/menu/menu-state.interface";
import { TrackingInterface } from "@/shared/services/tracking/tracking.interface";
import { GithubLinkComponent } from "@/shared/components/github-link/github-link.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HeaderComponent,
    NgScrollbarModule,
    GithubLinkComponent,
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(NgScrollbar)
  public readonly scrollbarRef!: NgScrollbar;

  public readonly events = CustomTrackingEvent;

  public constructor(
    private readonly router: Router,
    @Inject(TRACKING)
    private readonly tracking: TrackingInterface,
    @Inject(WINDOW)
    private readonly win: Window,
    @Inject(DOCUMENT)
    private readonly document: Document,
    @Inject(MENU_STATE)
    private readonly menuService: MenuStateInterface,
  ) {}

  @HostListener("window:resize")
  public onResize(): void {
    this.setWindowWidth();
  }

  public ngOnInit(): void {
    this.setWindowWidth();
  }

  public ngAfterViewInit(): void {
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

  private setWindowWidth(): void {
    this.menuService.setWindowWidth(this.win.innerWidth);
  }
}
