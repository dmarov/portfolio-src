import { Component, ChangeDetectionStrategy, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MenuStateInterface } from "@/shared/services/menu/menu-state.interface";
import { heightAnimation } from "@/shared/animations/height.animation";
import { menuEntries } from "../../const/menu-entries.const";
import { MENU_STATE } from "../../const/injection-tokens.const";

@Component({
  selector: "app-header-mobile-menu",
  templateUrl: "./header-mobile-menu.component.html",
  styleUrls: ["./header-mobile-menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [heightAnimation],
})
export class HeaderMobileMenuComponent {
  public readonly isMenuOpen$ = this.menuService.isMenuOpened$;

  public readonly menuEntries = menuEntries;

  public constructor(
    @Inject(MENU_STATE)
    private readonly menuService: MenuStateInterface,
  ) {}

  public onLinkClick(event: Event, isActive: boolean): void {
    if (isActive) {
      event.stopPropagation();
      event.preventDefault();
    }

    this.menuService.toggle();
  }
}
