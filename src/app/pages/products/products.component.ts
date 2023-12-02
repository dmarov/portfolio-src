import {
  Component,
  AfterViewInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { InViewEffect } from "@/app/shared/utils/inview-effect";
import { UnfoldEffect } from "@/app/shared/utils/unfold-effect";
import { RobotsMangoOfficeComponent } from "./robots-mango-office/robots-mango-office.component";
import { RivertvWebsiteComponent } from "./rivertv-website/rivertv-website.component";
import { VmediaWebsiteComponent } from "./vmedia-website/vmedia-website.component";
import { ScarlettAndMonarchCmsComponent } from "./scarlett-and-monarch-cms/scarlett-and-monarch-cms.component";
import { TrikWebsiteComponent } from "./trik-website/trik-website.component";
import { PaxusWebsiteComponent } from "./paxus-website/paxus-website.component";
import { KemerovoWebsiteComponent } from "./kemerovo-website/kemerovo-website.component";
import { MyPortfolioWebsiteComponent } from "./my-portfolio-website/my-portfolio-website.component";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    RobotsMangoOfficeComponent,
    RivertvWebsiteComponent,
    VmediaWebsiteComponent,
    ScarlettAndMonarchCmsComponent,
    TrikWebsiteComponent,
    PaxusWebsiteComponent,
    KemerovoWebsiteComponent,
    MyPortfolioWebsiteComponent,
  ],
})
export class ProductsComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    UnfoldEffect.init();
    InViewEffect.init();
  }
}
