import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Observable } from "rxjs";
import { MenuService } from "@/app/shared/services/menu/menu.service";
import { height } from "@/app/shared/animations/height";
import { RoutePath } from "@/app/models/route-path.enum";
import { MenuEntry } from "@/app/models/menu/menu-entry.interface";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  animations: [height],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class MenuComponent implements OnInit {
  public isMenuOpen$!: Observable<boolean>;

  public routePath = RoutePath;

  public menuEntries: ReadonlyArray<MenuEntry> = [
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

  public constructor(private readonly menuService: MenuService) {}

  public ngOnInit(): void {
    this.isMenuOpen$ = this.menuService.menuVisible$;
  }

  public closeMenu(): void {
    this.menuService.close();
  }

  public toggleMenu(): void {
    this.menuService.toggle();
  }
}
