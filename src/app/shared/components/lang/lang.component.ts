import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";
import { I18nUrl } from "@/app/shared/utils/i18n-url/i18n-url.util";
import { Lang } from "@/app/models/lang.enum";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";

@Component({
  selector: "app-lang",
  templateUrl: "./lang.component.html",
  styleUrls: ["./lang.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  providers: [I18nUrl],
})
export class LangComponent implements OnInit, OnDestroy {
  public readonly languages = [
    {
      type: Lang.English,
      url: "/en",
      text: "EN",
      onClick(): void {
        window.userTracking.sendCustomEvent(
          CustomTrackingEvent.SwitchEnClick,
          {},
        );
      },
    },
    {
      type: Lang.Russian,
      url: "/ru",
      text: "RU",
      onClick(): void {
        window.userTracking.sendCustomEvent(
          CustomTrackingEvent.SwitchRuClick,
          {},
        );
      },
    },
  ];

  private readonly activeMatch = this.languages.find((l) =>
    window.location.pathname.startsWith(l.url),
  );

  public activeLang = this.activeMatch ?? null;

  private readonly subscription = new Subscription();

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
