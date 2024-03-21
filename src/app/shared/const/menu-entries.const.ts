import { MenuEntry } from "@/models/menu/menu-entry.interface";
import { RoutePath } from "@/models/routing/route-path.enum";

export const menuEntries: ReadonlyArray<MenuEntry> = [
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
