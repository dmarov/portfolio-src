import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { filter, map } from "rxjs/operators";
import { Language } from "@/app/models/lang/language.interface";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { LanguageType } from "@/app/models/lang/language-type.enum";
import { LanguageSwitchInterface } from "../../services/language-switch/language-switch.interface";
import {
  LANGUAGE_SWITCH,
  TRACKING,
  WINDOW,
} from "../../const/injection-tokens.const";
import { TrackingInterface } from "../../services/tracking/tracking.interface";

@Component({
  selector: "app-lang",
  templateUrl: "./lang.component.html",
  styleUrls: ["./lang.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class LangComponent {
  public readonly essentialUrl$ = this.router.events.pipe(
    filter((e) => e instanceof NavigationEnd),
    map(() => {
      const url = new URL(this.window.location.href).toString();

      return this.languageSwitchService.getEssentialUrl(url);
    }),
  );

  public readonly languages: ReadonlyArray<Language> = [
    this.createLanguage(
      "EN",
      LanguageType.English,
      CustomTrackingEvent.SwitchEnClick,
    ),
    this.createLanguage(
      "RU",
      LanguageType.Russian,
      CustomTrackingEvent.SwitchRuClick,
    ),
  ];

  public constructor(
    private readonly router: Router,
    @Inject(TRACKING)
    private readonly tracking: TrackingInterface,
    @Inject(LANGUAGE_SWITCH)
    private readonly languageSwitchService: LanguageSwitchInterface,
    @Inject(WINDOW)
    private readonly window: Window,
  ) {}

  public async onLanguageSwitchClick(
    event: Event,
    lang: Language,
  ): Promise<void> {
    event.preventDefault();
    await this.tracking.sendCustomEvent(lang.trackingEvent, {});
    this.window.location.href = (event.target as HTMLAnchorElement).href;
  }

  private createLanguage(
    name: string,
    type: LanguageType,
    event: CustomTrackingEvent,
  ): Language {
    const initialFullUrl = new URL(this.window.location.href).toString();

    return {
      text: name,
      isActive: this.languageSwitchService.isActive(initialFullUrl, type),
      url$: this.essentialUrl$.pipe(
        map((url) => this.languageSwitchService.getFullUrl(type, url)),
      ),
      trackingEvent: event,
    };
  }
}
