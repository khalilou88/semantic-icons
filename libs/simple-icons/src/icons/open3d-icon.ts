import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-open3d-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Open3D</svg:title>
    <svg:path
      d="M5.998 1.606 0 12l5.998 10.394h2.094l1.954-3.383H7.952L4.06 12.268h8.149l3.56 6.157L19.483 12l-3.715-6.444-3.56 6.18H4.055l3.893-6.747h2.098L8.088 1.606Zm2.71 0 1.954 3.383h5.386L20.096 12l-4.044 7.011h-5.394l-1.954 3.383h9.294l.488-.847L24 12 18.002 1.606Z"
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
export class SiOpen3DIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
