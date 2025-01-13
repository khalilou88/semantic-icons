import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-percent-badge-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M3.396 6.093a2 2 0 0 0 0 3.814 2 2 0 0 0 2.697 2.697 2 2 0 0 0 3.814 0 2.001 2.001 0 0 0 2.698-2.697 2 2 0 0 0-.001-3.814 2.001 2.001 0 0 0-2.697-2.698 2 2 0 0 0-3.814.001 2 2 0 0 0-2.697 2.697ZM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3.47-1.53a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 1 1-1.06-1.06l4-4ZM11 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
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
export class SiPercentBadgeIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 16 16');

  readonly fill = input<string>('currentColor');
}
