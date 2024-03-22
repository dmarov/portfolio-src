import { Component, ChangeDetectionStrategy, Inject } from "@angular/core";
import { RoutePath } from "@/models/routing/route-path.enum";
import { msInYear } from "@/shared/const/ms-in-year.const";
import { CONSTANTS, VISIT_TIME } from "@/shared/const/injection-tokens.const";
import { AppConstants } from "@/models/constants/app-constants";

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

  private readonly startDate = new Date(this.constants.dateBeginning);

  public constructor(
    @Inject(VISIT_TIME)
    private readonly visitTime: number,
    @Inject(CONSTANTS)
    private readonly constants: AppConstants,
  ) {
    const years = (this.visitTime - this.startDate.getTime()) / msInYear;

    this.years = Math.floor(years);
  }
}
