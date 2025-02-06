import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-radar-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
    <svg:path d="M4 6h.01" />
    <svg:path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
    <svg:path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
    <svg:path d="M12 18h.01" />
    <svg:path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
    <svg:circle cx="12" cy="12" r="2" />
    <svg:path d="m13.41 10.59 5.66-5.66" />
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
export class SiRadarIcon {
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
