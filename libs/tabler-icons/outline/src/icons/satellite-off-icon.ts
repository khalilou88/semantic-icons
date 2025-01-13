import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-satellite-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M7.707 3.707l5.586 5.586m-1.293 2.707l-1.293 1.293a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414l1.293 -1.293"
    />
    <svg:path d="M6 10l-3 3l3 3l3 -3" />
    <svg:path d="M10 6l3 -3l3 3l-3 3" />
    <svg:path d="M12 12l1.5 1.5" />
    <svg:path d="M14.5 17c.69 0 1.316 -.28 1.769 -.733" />
    <svg:path
      d="M15 21c1.654 0 3.151 -.67 4.237 -1.752m1.507 -2.507a6 6 0 0 0 .256 -1.741"
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
export class SiSatelliteOffIcon {
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
