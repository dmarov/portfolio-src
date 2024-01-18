import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";
import { filter } from "rxjs/operators";
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
export class LangComponent implements OnInit, OnDestroy {
  public readonly languages: ReadonlyArray<Language> = [
    {
      type: LanguageType.English,
      url: this.languageSwitch.getPrefix(LanguageType.English),
      text: "EN",
      trackingEvent: CustomTrackingEvent.SwitchEnClick,
    },
    {
      type: LanguageType.Russian,
      url: this.languageSwitch.getPrefix(LanguageType.Russian),
      text: "RU",
      trackingEvent: CustomTrackingEvent.SwitchRuClick,
    },
  ];

  private readonly activeMatch = this.languages.find((l) =>
    this.languageSwitch.isActive(
      new URL(this.window.location.href).toString(),
      l.type,
    ),
  );

  public readonly activeLang: Language | null = this.activeMatch ?? null;

  private readonly subscription = new Subscription();

  public path = "/";

  public constructor(
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef,
    private readonly tracking: TrackingService,
    private readonly languageSwitch: LanguageSwitchService,
    @Inject(WINDOW)
    private readonly window: Window,
  ) {}

  public ngOnInit(): void {
    this.subscription.add(
      this.router.events
        .pipe(filter((e) => e instanceof NavigationEnd))
        .subscribe(() => {
          const url = new URL(this.window.location.href).toString();
          this.path = this.languageSwitch.getEssentialUrl(url);

          this.cdr.detectChanges();
        }),
    );
  }

  public async onLanguageSwitchClick(
    event: Event,
    lang: Language,
  ): Promise<void> {
    event.preventDefault();
    await this.tracking.sendCustomEvent(lang.trackingEvent, {});
    this.window.location.href = (event.target as HTMLAnchorElement).href;
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
