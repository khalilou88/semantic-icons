import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-battery-0-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M1 6.25A2.25 2.25 0 0 1 3.25 4h8.5A2.25 2.25 0 0 1 14 6.25v.085a1.5 1.5 0 0 1 1 1.415v.5a1.5 1.5 0 0 1-1 1.415v.085A2.25 2.25 0 0 1 11.75 12h-8.5A2.25 2.25 0 0 1 1 9.75v-3.5Zm2.25-.75a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75h-8.5Z"
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
export class SiBattery0Icon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 16 16');

  readonly fill = input<string>('currentColor');
}
