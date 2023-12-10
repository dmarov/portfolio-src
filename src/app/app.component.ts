import { CommonModule } from "@angular/common";
import { filter } from "rxjs/operators";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Router, NavigationEnd, RouterModule } from "@angular/router";
import { HeaderComponent } from "./shared/components/header/header.component";
import { CustomTrackingEvent } from "./models/tracking/custom-tracking-event.enum";
import { KeyboardService } from "./shared/services/keyboard/keyboard.service";
import { Key } from "./models/keyboard/key.enum";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule, CommonModule, HeaderComponent],
})
export class AppComponent implements OnInit {
  public constructor(
    private readonly router: Router,
    private readonly keyboard: KeyboardService,
  ) {}

  public ngOnInit(): void {
    this.router.events
      .pipe(filter((s) => s instanceof NavigationEnd))
      .subscribe(() => {
        this.autoScroll();
      });

    this.registerShortcut(Key.Space, () => {
      this.scrollDown();
    });

    this.registerShortcut(Key.ArrowDown, () => {
      this.scrollDown();
    });

    this.registerShortcut(Key.ArrowUp, () => {
      this.scrollUp();
    });
  }

  public onVisitGithubFooterClick(): void {
    window.userTracking.sendCustomEvent(
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

  private registerShortcut(key: Key, callback: () => void): void {
    let intervalId: ReturnType<typeof setInterval> | null = null;

    this.keyboard.registerKeyDownOnce(key, (event: Event) => {
      event.preventDefault();

      callback();

      intervalId = setInterval(() => {
        callback();
      }, 50);
    });

    this.keyboard.registerKeyUp(key, (event: Event) => {
      event.preventDefault();

      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    });
  }

  private scrollDown(): void {
    this.scrollBy(Math.floor(window.innerHeight / 4));
  }

  private scrollUp(): void {
    this.scrollBy(-1 * Math.floor(window.innerHeight / 4));
  }

  private scrollBy(value: number): void {
    document.body.scrollBy({
      left: 0,
      top: value,
      behavior: "smooth",
    });
  }
}
