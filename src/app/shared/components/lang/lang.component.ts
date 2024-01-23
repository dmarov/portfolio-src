import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";
import { Language } from "@/app/models/lang/language.interface";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { LanguageType } from "@/app/models/lang/language-type.enum";
import { LanguageSwitchService } from "../../services/language-switch/language-switch.service";
import { WINDOW } from "../../const/injection-tokens.const";

@Component({
  selector: "app-lang",
  templateUrl: "./lang.component.html",
  styleUrls: ["./lang.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class LangComponent {
  public readonly languages: ReadonlyArray<Language>;

  public readonly activeLang: Language | null;

  public readonly path$: Observable<string>;

  public constructor(
    private readonly router: Router,
    private readonly tracking: TrackingService,
    private readonly languageSwitch: LanguageSwitchService,
    @Inject(WINDOW)
    private readonly window: Window,
  ) {
    this.path$ = this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => {
        const url = new URL(this.window.location.href).toString();

        return this.languageSwitch.getEssentialUrl(url);
      }),
    );

    this.languages = [
      {
        type: LanguageType.English,
        url$: this.path$.pipe(
          map((path) =>
            this.languageSwitch.getFullUrl(LanguageType.English, path),
          ),
        ),
        text: "EN",
        trackingEvent: CustomTrackingEvent.SwitchEnClick,
      },
      {
        type: LanguageType.Russian,
        url$: this.path$.pipe(
          map((path) =>
            this.languageSwitch.getFullUrl(LanguageType.Russian, path),
          ),
        ),
        text: "RU",
        trackingEvent: CustomTrackingEvent.SwitchRuClick,
      },
    ];

    const fullUrl = new URL(this.window.location.href).toString();

    const activeMatch = this.languages.find((l) =>
      this.languageSwitch.isActive(fullUrl, l.type),
    );

    this.activeLang = activeMatch ?? null;
  }

  public async onLanguageSwitchClick(
    event: Event,
    lang: Language,
  ): Promise<void> {
    event.preventDefault();
    await this.tracking.sendCustomEvent(lang.trackingEvent, {});
    this.window.location.href = (event.target as HTMLAnchorElement).href;
  }
}
