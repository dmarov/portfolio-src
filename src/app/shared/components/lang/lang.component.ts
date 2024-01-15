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
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";
import { environment } from "@/environments/environment";

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
      url: environment.languageRefs.en,
      text: "EN",
      onClick: (): void => {
        this.tracking.sendCustomEvent(CustomTrackingEvent.SwitchEnClick, {});
      },
    },
    {
      type: Lang.Russian,
      url: environment.languageRefs.ru,
      text: "RU",
      onClick: (): void => {
        this.tracking.sendCustomEvent(CustomTrackingEvent.SwitchRuClick, {});
      },
    },
  ];

  private readonly activeMatch = this.languages.find(
    (l) =>
      (l.url.startsWith("/") && window.location.pathname.startsWith(l.url)) ||
      (l.url.startsWith("http") && window.location.origin.startsWith(l.url)),
  );

  public readonly activeLang = this.activeMatch ?? null;

  private readonly subscription = new Subscription();

  public path = "/";

  public constructor(
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef,
    private readonly i18nUrl: I18nUrl,
    private readonly tracking: TrackingService,
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
