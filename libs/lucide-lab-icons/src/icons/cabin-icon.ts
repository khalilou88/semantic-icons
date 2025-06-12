import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cabin-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.6 10.4a2.12 2.12 0 1 0 3.02 2.98L12 7l6.4 6.4a2.12 2.12 0 1 0 2.979-3.021L13.7 2.7a2.4 2.4 0 0 0-3.404.004Z"
    />
    <svg:path d="M14 22v-7a2 2 0 0 0-4 0v7" />
    <svg:path d="M14 14h6v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6h6" />
    <svg:path d="M4 18h6" />
    <svg:path d="M14 18h6" />
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
export class SiCabinIcon {
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
