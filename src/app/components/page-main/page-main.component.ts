import {
  Component,
  OnInit,
  AfterViewInit,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';
import { UnfoldEffect, InViewEffect } from '@/utils';

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageMainComponent implements OnInit, AfterViewInit {
  @HostBinding('class')
  classes = 'app-layout__page page-main';

  private startDate = new Date('June 17, 2017 00:00:00');
  public years = 0;

  constructor() {}

  ngOnInit(): void {
    const years =
      (Date.now() - this.startDate.getTime()) / (1000 * 60 * 60 * 24 * 365);

    this.years = Math.floor(years);
  }

  ngAfterViewInit() {
    UnfoldEffect.init();
    InViewEffect.init();
  }
}
