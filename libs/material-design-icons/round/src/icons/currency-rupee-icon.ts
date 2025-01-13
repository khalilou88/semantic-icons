import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-currency-rupee-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.5 14h-.73l5.1 5.31c.61.64.16 1.69-.72 1.69-.27 0-.53-.11-.72-.31L7.4 14.41c-.26-.26-.4-.62-.4-.98 0-.79.64-1.43 1.43-1.43h2.07c1.76 0 3.22-1.3 3.46-3H7c-.55 0-1-.45-1-1s.45-1 1-1h6.66c-.56-1.18-1.76-2-3.16-2H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1h-2.26c.48.58.84 1.26 1.05 2H17c.55 0 1 .45 1 1s-.45 1-1 1h-1.02c-.26 2.8-2.62 5-5.48 5z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCurrencyRupeeIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
