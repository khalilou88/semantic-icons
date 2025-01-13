import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-snowflake-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m10 20-1.25-2.5L6 18" />
    <svg:path d="M10 4 8.75 6.5 6 6" />
    <svg:path d="m14 20 1.25-2.5L18 18" />
    <svg:path d="m14 4 1.25 2.5L18 6" />
    <svg:path d="m17 21-3-6h-4" />
    <svg:path d="m17 3-3 6 1.5 3" />
    <svg:path d="M2 12h6.5L10 9" />
    <svg:path d="m20 10-1.5 2 1.5 2" />
    <svg:path d="M22 12h-6.5L14 15" />
    <svg:path d="m4 10 1.5 2L4 14" />
    <svg:path d="m7 21 3-6-1.5-3" />
    <svg:path d="m7 3 3 6h4" />
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
export class SiSnowflakeIcon {
  readonly xmlns = input('http://www.w3.org/2000/svg');

  readonly width = input('24');

  readonly height = input('24');

  readonly viewBox = input('0 0 24 24');

  readonly fill = input('none');

  readonly stroke = input('currentColor');

  readonly strokeWidth = input<string>('2', {
    alias: 'stroke-width',
  });

  readonly strokeLinecap = input<string>('round', {
    alias: 'stroke-linecap',
  });

  readonly strokeLinejoin = input<string>('round', {
    alias: 'stroke-linejoin',
  });
}
