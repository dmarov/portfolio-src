import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

// export const height = trigger('grow', [
//   transition('void <=> *', []),
//   transition('* <=> *', [style({ height: '{{startHeight}}px', opacity: 0 }), animate('.3s ease')], {
//     params: { startHeight: 0 }
//   })
// ]);

export const height = trigger('slideInOut', [
      state('in', style({
        overflow: 'hidden',
        height: '*',
      })),
      state('out', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px',
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]);
