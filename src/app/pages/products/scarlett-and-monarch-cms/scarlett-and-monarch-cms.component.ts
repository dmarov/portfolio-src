import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-scarlett-and-monarch-cms",
  templateUrl: "./scarlett-and-monarch-cms.component.html",
  styleUrls: ["./scarlett-and-monarch-cms.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class ScarlettAndMonarchCmsComponent {}
