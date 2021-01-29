import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

export const height = trigger('grow', [
  transition('void <=> *', []),
  transition('* <=> *', [style({ height: '{{startHeight}}px', opacity: 0 }), animate('.3s ease')], {
    params: { startHeight: 0 }
  })
]);
