import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-face-alien-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 12a7.85 7.85 0 0 1-3.7 6.6l-4 2.7a3.9 3.9 0 0 1-4.5 0l-4-2.7A7.57 7.57 0 0 1 2 12a10 10 0 0 1 20 0"
    />
    <svg:path
      d="M10.7 11.3c-1.4-1.3-3.3-1.7-4.2-.8s-.5 2.8.8 4.2c1.4 1.4 3.2 1.8 4.2.8.9-.9.5-2.8-.8-4.2"
    />
    <svg:path
      d="M17.5 10.5c-.9-.9-2.8-.5-4.2.8-1.4 1.4-1.8 3.2-.8 4.2.9.9 2.8.5 4.2-.8 1.3-1.4 1.7-3.3.8-4.2"
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
export class SiFaceAlienIcon {
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
