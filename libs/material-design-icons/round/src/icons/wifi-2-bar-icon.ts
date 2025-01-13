import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wifi-2-bar-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6.62-1.63c-.63-.63-.59-1.71.13-2.24C7.33 10.79 9.57 10 12 10c2.43 0 4.67.79 6.49 2.13.72.53.76 1.6.13 2.24-.53.54-1.37.57-1.98.12A7.925 7.925 0 0 0 12 13c-1.73 0-3.33.55-4.64 1.49-.61.44-1.45.41-1.98-.12z"
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
export class SiWifi2BarIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
