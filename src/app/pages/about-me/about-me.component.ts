import {
  Component,
  AfterViewInit,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';
import { InViewEffect } from '@/shared/utils/inview-effect';
import { UnfoldEffect } from '@/shared/utils/unfold-effect';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent implements AfterViewInit {
  @HostBinding('class')
  classes = 'app-layout__page';

  ngAfterViewInit() {
    UnfoldEffect.init();
    InViewEffect.init();
  }
}
