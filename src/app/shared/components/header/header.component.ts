import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuService } from "@/app/shared/services/menu/menu.service";
import { LangComponent } from "../lang/lang.component";
import { BurgerComponent } from "../burger/burger.component";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";
import { HeaderMobileMenuComponent } from "../header-mobile-menu/header-mobile-menu.component";
import { HeaderDesktopMenuComponent } from "../header-desktop-menu/header-desktop-menu.component";

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
    private readonly menuService: MenuService,
    private readonly tracking: TrackingService,
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
