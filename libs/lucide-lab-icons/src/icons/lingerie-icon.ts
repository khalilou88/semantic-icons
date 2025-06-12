import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-lingerie-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5 2v2a2 2 0 0 0-2 2v2c0 1.7 1.3 3 3 3h2a2 2 0 0 0 2-2h4a2 2 0 0 0 2 2h2c1.7 0 3-1.3 3-3V6a2 2 0 0 0-2-2"
    />
    <svg:path d="M10 9c0-2.8-2.2-5-5-5" />
    <svg:path d="M19 2v2c-2.8 0-5 2.2-5 5" />
    <svg:path d="M3 15a7 7 0 0 1 7 7h4a7 7 0 0 1 7-7Z" />
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
export class SiLingerieIcon {
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
