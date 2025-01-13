import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-netcup-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>netcup</svg:title>
    <svg:path
      d="M5.25 0A5.239 5.239 0 0 0 0 5.25v13.5A5.239 5.239 0 0 0 5.25 24h13.5A5.239 5.239 0 0 0 24 18.75V5.25A5.239 5.239 0 0 0 18.75 0H5.25zm-.045 5.102h9.482c1.745 0 2.631.907 2.631 2.753v8.352h1.477v2.691h-4.666V8.58c0-.514-.298-.785-.889-.785H9.873v11.103H6.682V7.795H5.205V5.102z"
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
export class SiNetcupIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#056473');
}
