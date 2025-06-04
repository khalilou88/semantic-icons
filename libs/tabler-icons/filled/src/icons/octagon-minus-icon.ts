import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-octagon-minus-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M13.196 1.246l5.575 2.39a3.04 3.04 0 0 1 1.595 1.594l2.388 5.573c.328 .764 .328 1.63 0 2.393l-2.39 5.575a3.04 3.04 0 0 1 -1.594 1.595l-5.573 2.388a3.03 3.03 0 0 1 -2.393 0l-5.574 -2.389a3.04 3.04 0 0 1 -1.595 -1.595l-2.388 -5.574a3.04 3.04 0 0 1 0 -2.392l2.39 -5.575a3.04 3.04 0 0 1 1.593 -1.595l5.574 -2.388a3.04 3.04 0 0 1 2.392 0m1.804 9.754h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2"
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
export class SiOctagonMinusIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
