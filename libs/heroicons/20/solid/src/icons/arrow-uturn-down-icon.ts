import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-arrow-uturn-down-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M2.232 12.207a.75.75 0 0 1 1.06.025l3.958 4.146V6.375a5.375 5.375 0 0 1 10.75 0V9.25a.75.75 0 0 1-1.5 0V6.375a3.875 3.875 0 0 0-7.75 0v10.003l3.957-4.146a.75.75 0 0 1 1.085 1.036l-5.25 5.5a.75.75 0 0 1-1.085 0l-5.25-5.5a.75.75 0 0 1 .025-1.06Z"
      clip-rule="evenodd"
    />
  `,
  host: {
    'aria-hidden': 'true',
    'data-slot': 'icon',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiArrowUturnDownIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 20 20');

  readonly fill = input<string>('currentColor');
}
