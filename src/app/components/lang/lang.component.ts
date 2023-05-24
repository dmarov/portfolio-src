import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangComponent implements OnInit, OnDestroy {
  isEn = false;
  isRu = false;

  subscription = new Subscription();

  path = '/';

  constructor(private readonly actions$: Actions) {}

  ngOnInit(): void {
    this.isEn = window.location.pathname.startsWith('/en');
    this.isRu = window.location.pathname.startsWith('/ru');

    this.subscription.add(
      this.actions$.pipe(ofType(ROUTER_NAVIGATED)).subscribe(() => {
        const relPath =
          window.location.pathname +
          window.location.search +
          window.location.hash;
        this.path = relPath.replace(/^\/en/, '').replace(/^\/ru/, '');
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
