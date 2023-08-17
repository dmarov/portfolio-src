import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";
import { languages } from "@/models/languages.const";
import { I18nUrl } from "@/shared/utils/i18n-url/i18n-url.util";

@Component({
  selector: "app-lang",
  templateUrl: "./lang.component.html",
  styleUrls: ["./lang.component.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  providers: [I18nUrl],
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
    private readonly cdr: ChangeDetectorRef,
    private readonly i18nUrl: I18nUrl,
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

          this.path = this.i18nUrl.getPagePath(relPath);
          this.cdr.detectChanges();
        }
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
