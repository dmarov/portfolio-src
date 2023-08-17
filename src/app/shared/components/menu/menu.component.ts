import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Observable } from "rxjs";
import { MenuService } from "@/shared/services/menu.service";
import { height } from "@/shared/animations/height";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  animations: [height],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class MenuComponent implements OnInit {
  @Input()
  public isMenuOpen$!: Observable<boolean>;

  public constructor(private readonly menuService: MenuService) {}

  public ngOnInit(): void {
    this.isMenuOpen$ = this.menuService.menuVisible$;
  }

  public closeMenu(): void {
    this.menuService.hide();
  }

  public toggleMenu(): void {
    this.menuService.toggle();
  }
}
