import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-candy-cane-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      d="m11 9.16318-5-.8017V10.5C6 11.8807 7.11929 13 8.5 13s2.5-1.1193 2.5-2.5V9.16318ZM6.1404 6.35844 11 7.13764V2.08771c-1.14494.19988-2.22828.73028-3.08702 1.47474-.83378.72283-1.49585 1.68517-1.77258 2.79599ZM13 2.08771v4.91232h4.9734c-.1477-1.38214-.8959-2.57887-1.8864-3.43758-.8587-.74446-1.9421-1.27485-3.087-1.47474Zm5 6.91232h-5V11h5V9.00003ZM18 13h-5v2h5v-2Zm0 4h-5v2.5c0 1.3807 1.1193 2.5 2.5 2.5s2.5-1.1193 2.5-2.5V17Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCandyCaneIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
