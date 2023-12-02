import { CommonModule } from "@angular/common";
import { filter } from "rxjs/operators";
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
    this.router.events
      .pipe(filter((s) => s instanceof NavigationEnd))
      .subscribe(() => {
        this.autoScroll();
      });
  }

  private autoScroll(): void {
    const { hash } = window.location;
    const isIframe = window.self !== window.top;

    if (isIframe) {
      return;
    }

    if (hash) {
      const id = hash.replace(/#/, "");

      setTimeout(() => {
        this.scrollToId(id);
      }, 300);
    } else {
      setTimeout(() => {
        this.scrollToId("top-pivot");
      }, 300);
    }
  }

  private scrollToId(id: string): void {
    setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  }
}
