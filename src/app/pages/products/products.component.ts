import {
  Component,
  AfterViewInit,
  HostBinding,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from "@angular/core";
import { InViewEffect } from "@/shared/utils/inview-effect";
import { UnfoldEffect } from "@/shared/utils/unfold-effect";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ProductsComponent implements AfterViewInit {
  @HostBinding("class")
  public classes = "app-layout__page";

  public ngAfterViewInit(): void {
    UnfoldEffect.init();
    InViewEffect.init();
  }
}
