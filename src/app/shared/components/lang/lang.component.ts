import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { escapeRegexp } from "@/shared/utils/escape-regexp.util";
import { languages } from "@/models/languages.const";

@Component({
  selector: "app-lang",
  templateUrl: "./lang.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangComponent implements OnInit, OnDestroy {
  public languages = languages;

  private activeMatch = this.languages.find((l) =>
    window.location.pathname.startsWith(l.url),
  );

  public activeLang = this.activeMatch ?? null;

  private subscription = new Subscription();

  public path = "/";

  public constructor(
    private readonly router: Router,
  ) {}

  public ngOnInit(): void {
    this.subscription.add(
      this.router.events.subscribe((s) => {
        if (s instanceof NavigationEnd) {
          const relPath =
            window.location.pathname +
            window.location.search +
            window.location.hash;

          if (this.activeLang === null) {
            return;
          }

          this.path = relPath.replace(
            new RegExp(`^${escapeRegexp(this.activeLang.url)}`),
            "",
          );
        }
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
