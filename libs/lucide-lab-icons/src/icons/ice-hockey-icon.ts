import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ice-hockey-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M10 4v4c0 1.1-1.8 2-4 2s-4-.9-4-2V4" />
    <svg:ellipse cx="6" cy="4" rx="4" ry="2" />
    <svg:path
      d="M4 17a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h4a6 6 0 0 0 5.2-3l8.5-14a1.94 1.94 0 1 0-3.4-2l-7.9 13c-.4.6-1 1-1.7 1Z"
    />
    <svg:path d="m20.6 6.8-3.3-2.1" />
    <svg:path d="m15.2 8.1 3.3 2.1" />
    <svg:path d="M6 17v5" />
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
export class SiIceHockeyIcon {
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
