import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-spiral-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M10 12.057a1.9 1.9 0 0 0 .614 .743c.682 .459 1.509 .374 2.164 -.02m1.103 -2.92a3.298 3.298 0 0 0 -1.749 -2.059a3.6 3.6 0 0 0 -.507 -.195m-3.385 .634a4.154 4.154 0 0 0 -1.347 1.646c-1.095 2.432 .29 5.248 2.71 6.246c1.955 .806 4.097 .35 5.65 -.884m1.745 -2.268l.043 -.103c1.36 -3.343 -.557 -7.134 -3.896 -8.41c-1.593 -.61 -3.27 -.599 -4.79 -.113m-2.579 1.408a7.574 7.574 0 0 0 -2.268 3.128c-1.63 4.253 .823 9.024 5.082 10.576c3.211 1.17 6.676 .342 9.124 -1.738m1.869 -2.149a9.354 9.354 0 0 0 1.417 -4.516"
    />
    <svg:path d="M3 3l18 18" />
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
export class SiSpiralOffIcon {
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
