import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-brand-nem-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M12.182 2c1.94 .022 3.879 .382 5.818 1.08l.364 .135a23.075 23.075 0 0 1 3.636 1.785c0 5.618 -1.957 10.258 -5.87 13.92c-1.24 1.239 -2.5 2.204 -3.78 2.898l-.35 .182c-1.4 -.703 -2.777 -1.729 -4.13 -3.079c-3.912 -3.663 -5.87 -8.303 -5.87 -13.921c2.545 -1.527 5.09 -2.471 7.636 -2.832l.364 -.048a16.786 16.786 0 0 1 1.818 -.12h.364z"
    />
    <svg:path
      d="M2.1 7.07c2.073 6.72 5.373 7.697 9.9 2.93c0 -4 1.357 -6.353 4.07 -7.06l.59 -.11"
    />
    <svg:path d="M16.35 18.51s2.65 -5.51 -4.35 -8.51" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBrandNemIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');

  readonly stroke = input<string>('currentColor');

  readonly strokeWidth = input<string | number>('2', {
    alias: 'stroke-width',
  });

  readonly strokeLinecap = input<string>('round', {
    alias: 'stroke-linecap',
  });

  readonly strokeLinejoin = input<string>('round', {
    alias: 'stroke-linejoin',
  });
}
