import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-stencil-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Stencil</svg:title>
    <svg:path
      d="M8.85 15.66h9.25l-5 5.34H3.9ZM24 9.328H4.997L0 14.672h19.003ZM10.884 3H20.1l-4.977 5.34H5.9Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiStencilIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#5530FF');
}
