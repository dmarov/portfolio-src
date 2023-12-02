import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Observable } from "rxjs";
import { MenuService } from "@/app/shared/services/menu/menu.service";
import { height } from "@/app/shared/animations/height";
import { RoutePath } from "@/app/models/route-path.enum";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  animations: [height],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class MenuComponent implements OnInit {
  @Input()
  public isMenuOpen$!: Observable<boolean>;

  public routePath = RoutePath;

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
