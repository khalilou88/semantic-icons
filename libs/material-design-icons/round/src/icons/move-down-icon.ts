import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-move-down-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.01 10.72a4.985 4.985 0 0 0 4.07 5.18l-.79-.79A.996.996 0 1 1 7.7 13.7l2.59 2.59c.39.39.39 1.02 0 1.41l-2.58 2.6a.996.996 0 1 1-1.41-1.41l.88-.88v-.06a6.995 6.995 0 0 1-6.15-7.47C1.29 6.78 4.55 4 8.26 4H10c.55 0 1 .45 1 1s-.45 1-1 1H8.22c-2.7 0-5.07 2.04-5.21 4.72zM15 11h5c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2zm5-2h-5V6h5v3zm0 11h-5c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMoveDownIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
