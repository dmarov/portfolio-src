import { Directive, OnChanges, Input, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSmoothHeight]',
})
export class SmoothHeightAnimDirective implements OnChanges {

  @HostBinding('[style.display]')
  styleDisplay = '"block"';

  @HostBinding('[style.overflow]')
  styleOverflow = '"hidden"';

  @Input()
  smoothHeight;
  pulse: boolean;
  startHeight: number;

  constructor(private element: ElementRef) {}

  @HostBinding('@grow')
  get grow() {
    return { value: this.pulse, params: { startHeight: this.startHeight } };
  }

  setStartHeight() {
    this.startHeight = this.element.nativeElement.clientHeight;
  }

  ngOnChanges(changes) {
    this.setStartHeight();
    this.pulse = !this.pulse;
  }
}
