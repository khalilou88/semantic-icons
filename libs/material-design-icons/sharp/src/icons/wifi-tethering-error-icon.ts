import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wifi-tethering-error-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 7c-3.31 0-6 2.69-6 6 0 1.66.68 3.15 1.76 4.24l1.42-1.42A3.934 3.934 0 0 1 8 13c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.11-.45 2.1-1.18 2.82l1.42 1.42A6.003 6.003 0 0 0 18 13c0-3.31-2.69-6-6-6zm0-4C6.48 3 2 7.48 2 13c0 2.76 1.12 5.26 2.93 7.07l1.42-1.42A7.94 7.94 0 0 1 4 13c0-4.42 3.58-8 8-8 2.53 0 4.78 1.17 6.24 3h2.42C18.93 5.01 15.7 3 12 3zm0 8c-1.1 0-2 .9-2 2 0 .55.23 1.05.59 1.41.36.36.86.59 1.41.59s1.05-.23 1.41-.59c.36-.36.59-.86.59-1.41 0-1.1-.9-2-2-2zm8-1h2v6h-2v-6zm0 8h2v2h-2v-2z"
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
export class SiWifiTetheringErrorIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
