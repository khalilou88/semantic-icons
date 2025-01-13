import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mosque-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.12 8h11.76m0 0c.07-.29.12-.59.12-.91 0-1.31-.65-2.53-1.74-3.25L12 1 7.74 3.84A3.887 3.887 0 0 0 6 7.09c0 .32.05.62.12.91"
    />
    <svg:path
      d="M24 7c0-1.1-2-3-2-3s-2 1.9-2 3c0 .74.4 1.38 1 1.72V13h-2V9H5v4H3V8.72c.6-.34 1-.98 1-1.72 0-1.1-2-3-2-3S0 5.9 0 7c0 .74.4 1.38 1 1.72V21h9v-6h4v6h9V8.72c.6-.34 1-.98 1-1.72z"
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
export class SiMosqueIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
