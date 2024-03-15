import { Component, ChangeDetectionStrategy, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuStateInterface } from "@/app/shared/services/menu/menu-state.interface";
import { LangComponent } from "../lang/lang.component";
import { BurgerComponent } from "../burger/burger.component";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { HeaderMobileMenuComponent } from "../header-mobile-menu/header-mobile-menu.component";
import { HeaderDesktopMenuComponent } from "../header-desktop-menu/header-desktop-menu.component";
import { MENU_STATE, TRACKING } from "../../const/injection-tokens.const";
import { TrackingInterface } from "../../services/tracking/tracking.interface";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    HeaderMobileMenuComponent,
    HeaderDesktopMenuComponent,
    LangComponent,
    BurgerComponent,
  ],
})
export class HeaderComponent {
  public readonly isMenuOpened$ = this.menuService.menuVisible$;

  public readonly isDesktop$ = this.menuService.isDesktop$;

  public constructor(
    @Inject(MENU_STATE)
    private readonly menuService: MenuStateInterface,
    @Inject(TRACKING)
    private readonly tracking: TrackingInterface,
  ) {}

  public toggleMenuOpened(): void {
    this.menuService.toggle();
  }

  public onVisitGithubHeaderClick(): void {
    this.tracking.sendCustomEvent(
      CustomTrackingEvent.VisitGithubHeaderClick,
      {},
    );
  }
}
