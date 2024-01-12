import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { environment } from "@/environments/environment";
import { RoutePath } from "@/app/models/routing/route-path.enum";
import { msInYear } from "@/app/shared/const/ms-in-year.const";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class WelcomeComponent implements OnInit {
  public readonly routePath = RoutePath;

  public years = 0;

  private readonly startDate = new Date(environment.dateBeginning);

  public ngOnInit(): void {
    const years = (Date.now() - this.startDate.getTime()) / msInYear;

    this.years = Math.floor(years);
  }
}
