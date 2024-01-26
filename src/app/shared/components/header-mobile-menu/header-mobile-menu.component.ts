import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MenuService } from "@/app/shared/services/menu/menu.service";
import { heightAnimation } from "@/app/shared/animations/height.animation";
import { menuEntries } from "../../const/menu-entries.const";

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

  public readonly menuEntries = menuEntries;

  public constructor(private readonly menuService: MenuService) { }

  public onLinkClick(event: Event, isActive: boolean): void {
    if (isActive) {
      event.stopPropagation();
      event.preventDefault();
    }

    this.menuService.toggle();
  }
}
