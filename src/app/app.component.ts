import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Router, NavigationEnd, RouterModule } from "@angular/router";
import { HeaderComponent } from "./shared/components/header/header.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule, CommonModule, HeaderComponent],
})
export class AppComponent implements OnInit {
  public constructor(private readonly router: Router) {}

  public ngOnInit(): void {
    this.router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        const { hash } = window.location;

        if (window.self !== window.top) {
          return;
        }

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
}
