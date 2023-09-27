import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-robots-mango-office",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./robots-mango-office.component.html",
  styleUrls: ["./robots-mango-office.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RobotsMangoOfficeComponent {}
