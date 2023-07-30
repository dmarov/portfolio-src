import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { ROUTER_NAVIGATED } from "@ngrx/router-store";
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

  public activeLang = this.languages.find(
    (l) => window.location.pathname.startsWith(l.url)
  ) ?? null;

  private subscription = new Subscription();

  public path = "/";

  public constructor(private readonly actions$: Actions) {}

  public ngOnInit(): void {
    this.subscription.add(
      this.actions$.pipe(ofType(ROUTER_NAVIGATED)).subscribe(() => {
        const relPath =
          window.location.pathname +
          window.location.search +
          window.location.hash;

        this.path = relPath.replace(
          new RegExp(`^${escapeRegexp(this.activeLang.url)}`),
          "",
        );
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
