import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { menuEntries } from "../../const/menu-entries.const";

@Component({
  selector: "app-header-desktop-menu",
  templateUrl: "./header-desktop-menu.component.html",
  styleUrls: ["./header-desktop-menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class HeaderDesktopMenuComponent {
  public readonly menuEntries = menuEntries;
}
