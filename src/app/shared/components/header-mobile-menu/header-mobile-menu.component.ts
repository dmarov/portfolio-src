import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MenuService } from "@/app/shared/services/menu/menu.service";
import { heightAnimation } from "@/app/shared/animations/height.animation";
import { MenuEntry } from "@/app/models/menu/menu-entry.interface";
import { RoutePath } from "@/app/models/routing/route-path.enum";

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
  public readonly isMenuOpen$ = this.menuService.menuVisible$;

  public readonly menuEntries: ReadonlyArray<MenuEntry> = [
    {
      href: RoutePath.Home,
      title: $localize`:go to home page|link to land on home page@@HOME_PAGE_LINK:Home`,
      exact: true,
    },
    {
      href: RoutePath.Products,
      title: $localize`:go to products page|link to land on products page@@PRODUCTS_PAGE_LINK:Products`,
      exact: false,
    },
    {
      href: RoutePath.AboutMe,
      title: $localize`:go to about me page|link to land on about me page@@ABOUT_ME_PAGE_LINK:About Me`,
      exact: false,
    },
  ];

  public constructor(private readonly menuService: MenuService) { }

  public onLinkClick(event: Event, isActive: boolean): void {
    if (isActive) {
      event.stopPropagation();
      event.preventDefault();
    }

    this.menuService.toggle();
  }
}
