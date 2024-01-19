import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-robots-mango-office",
  templateUrl: "./robots-mango-office.component.html",
  styleUrls: ["./robots-mango-office.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class RobotsMangoOfficeComponent {}
