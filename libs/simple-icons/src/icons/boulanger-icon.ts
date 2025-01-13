import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-boulanger-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>boulanger</svg:title>
    <svg:path
      d="M8.405 3.612v3.5777h5.6616c2.987.0347 5.3836 2.4311 5.3836 5.4181-.0347 2.987-2.4313 5.3834-5.3836 5.4181h-3.1259c-2.987 0-5.4181-2.431-5.4181-5.418V8.4052c0-2.084 1.1458-3.8903 2.8824-4.7933zC3.7856 3.612 0 7.3975 0 12.017c0 4.6194 3.7162 8.371 8.3704 8.371h7.2592C20.249 20.388 24 16.6711 24 12.017c0-4.6542-3.6815-8.405-8.3704-8.405zm.0353 6.4255v2.5357c0 1.3893 1.1457 2.535 2.535 2.535h3.0222c1.3893 0 2.535-1.1457 2.535-2.535 0-1.3893-1.111-2.5357-2.535-2.5357z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBoulangerIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FD5300');
}
