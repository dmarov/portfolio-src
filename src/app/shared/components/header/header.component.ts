import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Observable } from "rxjs";
import { environment } from "@/environments/environment";
import { MenuService } from "@/app/shared/services/menu/menu.service";
import { MenuComponent } from "../menu/menu.component";
import { LangComponent } from "../lang/lang.component";
import { BurgerComponent } from "../burger/burger.component";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";

@Component({
  selector: "app-header",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MenuComponent, LangComponent, BurgerComponent],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public isMultilang = environment.multilang;

  public isMenuOpened$!: Observable<boolean>;

  public constructor(private readonly menuService: MenuService) {}

  public ngOnInit(): void {
    this.isMenuOpened$ = this.menuService.menuVisible$;
  }

  public toggleMenuOpened(): void {
    this.menuService.toggle();
  }

  public onVisitGithubHeaderClick(): void {
    window.userTracking.sendCustomEvent(
      CustomTrackingEvent.VisitGithubHeaderClick,
      {},
    );
  }
}
