import { ChangeDetectionStrategy, Component, HostBinding } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule],
})
export class NotFoundComponent {
  @HostBinding("class")
  public class = "app__page";
}
