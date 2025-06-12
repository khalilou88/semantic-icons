import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-baby-pacifier-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.1 7.4a1.95 1.95 0 0 0 3.7-1.5c-.8-2-3.2-3-5.2-2.2-2.9 1.2-4.8 3.7-5.4 6.5a1.95 1.95 0 0 0 0 3.6A9.05 9.05 0 0 0 7 19.42"
    />
    <svg:path
      d="M17.1 19.4c2-1.3 3.3-3.4 3.8-5.6a2 2 0 0 0 0-3.6 9.83 9.83 0 0 0-3.2-5"
    />
    <svg:path d="M8 12h.01" />
    <svg:path d="M16 12h.01" />
    <svg:circle cx="12" cy="16" r="2" />
    <svg:path
      d="M10 16h-.5A2.5 2.5 0 0 0 7 18.5v1A2.5 2.5 0 0 0 9.5 22h5a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 0-2.5-2.5H14"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
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
export class SiBabyPacifierIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

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
