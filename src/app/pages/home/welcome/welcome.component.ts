import { Component, ChangeDetectionStrategy, Inject } from "@angular/core";
import { environment } from "@/environments/environment";
import { RoutePath } from "@/app/models/routing/route-path.enum";
import { msInYear } from "@/app/shared/const/ms-in-year.const";
import { VISIT_TIME } from "@/app/shared/const/injection-tokens.const";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class WelcomeComponent {
  public readonly routePath = RoutePath;

  public readonly years: number;

  private readonly startDate = new Date(environment.dateBeginning);

  public constructor(
    @Inject(VISIT_TIME)
    private readonly visitTime: number,
  ) {
    const years = (this.visitTime - this.startDate.getTime()) / msInYear;

    this.years = Math.floor(years);
  }
}
