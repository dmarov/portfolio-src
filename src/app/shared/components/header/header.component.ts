import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Observable } from "rxjs";
import { MenuService } from "@/app/shared/services/menu/menu.service";
import { LangComponent } from "../lang/lang.component";
import { BurgerComponent } from "../burger/burger.component";
import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { TrackingService } from "@/app/shared/services/tracking/tracking.service";
import { HeaderMenuComponent } from "../header-menu/header-menu.component";

@Component({
  selector: "app-header",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, HeaderMenuComponent, LangComponent, BurgerComponent],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public isMenuOpened$!: Observable<boolean>;

  public constructor(
    private readonly menuService: MenuService,
    private readonly tracking: TrackingService,
  ) {}

  public ngOnInit(): void {
    this.isMenuOpened$ = this.menuService.menuVisible$;
  }

  public toggleMenuOpened(): void {
    this.menuService.toggle();
  }

  public onVisitGithubHeaderClick(): void {
    this.tracking.sendCustomEvent(
      CustomTrackingEvent.VisitGithubHeaderClick,
      {},
    );
  }
}
