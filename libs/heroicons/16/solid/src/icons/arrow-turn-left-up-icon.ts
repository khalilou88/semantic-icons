import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-arrow-turn-left-up-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M14 13.25a.75.75 0 0 0-.75-.75h-6.5V4.56l.97.97a.75.75 0 0 0 1.06-1.06L6.53 2.22a.75.75 0 0 0-1.06 0L3.22 4.47a.75.75 0 0 0 1.06 1.06l.97-.97v8.69c0 .414.336.75.75.75h7.25a.75.75 0 0 0 .75-.75Z"
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
export class SiArrowTurnLeftUpIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 16 16');

  readonly fill = input<string>('currentColor');
}
