import {
  Component,
  AfterViewInit,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';
import { InViewEffect } from '@/shared/utils/inview-effect';
import { UnfoldEffect } from '@/shared/utils/unfold-effect';

@Component({
  selector: 'app-page-about-me',
  templateUrl: './page-about-me.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageAboutMeComponent implements AfterViewInit {
  @HostBinding('class')
  classes = 'app-layout__page';

  ngAfterViewInit() {
    UnfoldEffect.init();
    InViewEffect.init();
  }
}
