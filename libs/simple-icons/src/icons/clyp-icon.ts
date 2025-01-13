import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-clyp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Clyp</svg:title>
    <svg:path
      d="M11.9995 17.9583a1.137 1.137 0 01-1.137-1.136V7.2347a1.138 1.138 0 012.275 0v9.5896c0 .626-.51 1.134-1.138 1.134m7.4397 2.4398a1.137 1.137 0 01-1.14-1.1379V4.7958a1.138 1.138 0 012.276 0v14.4654c0 .627-.51 1.136-1.138 1.136M15.7193 24a1.137 1.137 0 01-1.138-1.136V1.138a1.138 1.138 0 012.276 0v21.726c0 .627-.509 1.136-1.138 1.136m-7.4366-3.1599a1.137 1.137 0 01-1.138-1.136V4.2979a1.138 1.138 0 012.276 0v15.4064c0 .628-.51 1.137-1.138 1.137m-3.7199-4.9889a1.137 1.137 0 01-1.138-1.135V9.2857a1.138 1.138 0 012.276 0v5.4318c0 .626-.51 1.135-1.138 1.135z"
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
export class SiClypIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#3CBDB1');
}
