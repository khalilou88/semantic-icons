import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-baby-carriage-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M14.5 2a6.5 6.5 0 0 1 6.49 6.858a1.04 1.04 0 0 1 -.04 .456a6.51 6.51 0 0 1 -3.757 5.103l.532 1.595q .135 -.012 .275 -.012a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 .894 -1.966l-.634 -1.903q -.377 .045 -.765 .045h-2.675q -.547 0 -1.076 -.083l-.648 1.941a3 3 0 1 1 -5.101 2.142l.004 -.176a3 3 0 0 1 3.27 -2.812l.56 -1.682a7 7 0 0 1 -3.652 -4.117l-1.402 -4.213h-1.78a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 1 -1h2.5a1 1 0 0 1 .949 .684l1.104 3.316h6.447v-5a1 1 0 0 1 1 -1zm-6.5 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m10 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2"
    />
  `,
  host: {
    role: 'img',
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
export class SiBabyCarriageIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
