import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-thermometer-snowflake-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m10 20-1.25-2.5L6 18" />
    <svg:path d="M10 4 8.75 6.5 6 6" />
    <svg:path d="M10.585 15H10" />
    <svg:path d="M2 12h6.5L10 9" />
    <svg:path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
    <svg:path d="m4 10 1.5 2L4 14" />
    <svg:path d="m7 21 3-6-1.5-3" />
    <svg:path d="m7 3 3 6h2" />
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
    'data-slot': 'icon',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiThermometerSnowflakeIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

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
