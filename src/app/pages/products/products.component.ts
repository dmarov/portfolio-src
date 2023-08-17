import {
  Component,
  AfterViewInit,
  HostBinding,
  ChangeDetectionStrategy,
} from "@angular/core";
import { InViewEffect } from "@/app/shared/utils/inview-effect";
import { UnfoldEffect } from "@/app/shared/utils/unfold-effect";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ProductsComponent implements AfterViewInit {
  @HostBinding("class")
  public classes = "app__page";

  public ngAfterViewInit(): void {
    UnfoldEffect.init();
    InViewEffect.init();
  }
}
