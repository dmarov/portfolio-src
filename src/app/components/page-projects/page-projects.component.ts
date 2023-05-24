import {
  Component,
  AfterViewInit,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';
import { UnfoldEffect, InViewEffect } from '@/utils';

@Component({
  selector: 'app-page-projects',
  templateUrl: './page-projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageProjectsComponent implements AfterViewInit {
  @HostBinding('class')
  classes = 'app-layout__page';

  ngAfterViewInit() {
    UnfoldEffect.init();
    InViewEffect.init();
  }
}
