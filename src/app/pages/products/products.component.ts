import {
  Component,
  AfterViewInit,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';
import { InViewEffect } from '@/shared/utils/inview-effect';
import { UnfoldEffect } from '@/shared/utils/unfold-effect';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements AfterViewInit {
  @HostBinding('class')
  classes = 'app-layout__page';

  ngAfterViewInit() {
    UnfoldEffect.init();
    InViewEffect.init();
  }
}
