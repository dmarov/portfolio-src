import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-burger",
  templateUrl: "./burger.component.html",
  styleUrls: ["./burger.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class BurgerComponent {
  @Input()
  public readonly opened: boolean = false;

  @Output()
  public readonly openedChange = new EventEmitter<void>();

  public toggle(): void {
    this.openedChange.emit();
  }
}
