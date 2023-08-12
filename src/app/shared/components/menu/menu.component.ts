import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Observable } from "rxjs";
import { MenuService } from "@/shared/services/menu.service";
import { height } from "@/shared/animations/height";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  animations: [height],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  @Input()
  public isMenuOpen$!: Observable<boolean>;

  public constructor(
    private readonly menuService: MenuService,
  ) {}

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
