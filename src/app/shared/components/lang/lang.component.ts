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
  public readonly essentialUrl$: Observable<string>;

  public readonly languages: ReadonlyArray<Language>;

  public constructor(
    private readonly router: Router,
    private readonly tracking: TrackingService,
    private readonly languageSwitchService: LanguageSwitchService,
    @Inject(WINDOW)
    private readonly window: Window,
  ) {
    this.essentialUrl$ = this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => {
        const url = new URL(this.window.location.href).toString();

        return this.languageSwitchService.getEssentialUrl(url);
      }),
    );

    const initialFullUrl = new URL(this.window.location.href).toString();

    this.languages = [
      {
        text: "EN",
        isActive: this.languageSwitchService.isActive(
          initialFullUrl,
          LanguageType.English,
        ),
        url$: this.essentialUrl$.pipe(
          map((url) =>
            this.languageSwitchService.getFullUrl(LanguageType.English, url),
          ),
        ),
        trackingEvent: CustomTrackingEvent.SwitchEnClick,
      },
      {
        text: "RU",
        isActive: this.languageSwitchService.isActive(
          initialFullUrl,
          LanguageType.Russian,
        ),
        url$: this.essentialUrl$.pipe(
          map((url) =>
            this.languageSwitchService.getFullUrl(LanguageType.Russian, url),
          ),
        ),
        trackingEvent: CustomTrackingEvent.SwitchRuClick,
      },
    ];
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
