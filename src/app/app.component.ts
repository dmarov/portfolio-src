import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { MenuService } from "./shared/services/menu.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public isMultilang = environment.multilang;

  public isMenuOpen$!: Observable<boolean>;

  public constructor(
    private readonly router: Router,
    private readonly menuService: MenuService,
  ) {}

  public ngOnInit(): void {
    this.isMenuOpen$ = this.menuService.menuVisible$;

    this.router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        const { hash } = window.location;

        if (hash) {
          const id = hash.replace(/#/, "");

          setTimeout(() => {
            const target = document.getElementById(id);
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }, 300);
        } else {
          setTimeout(() => {
            const target = document.getElementById("top-pivot");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }, 300);
        }
      }
    });
  }

  public toggleMenuOpen(): void {
    this.menuService.toggle();
  }
}
