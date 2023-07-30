import { ChangeDetectionStrategy, Component, HostBinding } from "@angular/core";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  @HostBinding("class")
  public class = "app-layout__page";
}
