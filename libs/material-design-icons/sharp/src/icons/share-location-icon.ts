import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-share-location-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.02 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.42-1.43a7.941 7.941 0 0 1-3.9 1.62zM4.03 12c0-4.05 3.03-7.41 6.95-7.93V2.05C5.95 2.58 2.03 6.84 2.03 12c0 5.16 3.92 9.42 8.95 9.95v-2.02c-3.92-.52-6.95-3.88-6.95-7.93zm15.92-1h2.02c-.2-2.01-1-3.84-2.21-5.32l-1.43 1.43c.86 1.1 1.44 2.43 1.62 3.89zm-1.61-6.74a9.981 9.981 0 0 0-5.32-2.21v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zm-.01 12.64 1.43 1.42A9.949 9.949 0 0 0 21.97 13h-2.02a7.941 7.941 0 0 1-1.62 3.9z"
    />
    <svg:path
      d="M16 11.1C16 8.61 14.1 7 12 7s-4 1.61-4 4.1c0 1.66 1.33 3.63 4 5.9 2.67-2.27 4-4.24 4-5.9zm-4 .9a1.071 1.071 0 0 1 0-2.14A1.071 1.071 0 0 1 12 12z"
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
export class SiShareLocationIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
