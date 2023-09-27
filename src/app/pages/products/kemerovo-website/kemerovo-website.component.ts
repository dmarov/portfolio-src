import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-kemerovo-website",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./kemerovo-website.component.html",
  styleUrls: ["./kemerovo-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KemerovoWebsiteComponent {}
