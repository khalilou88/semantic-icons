import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pumpkin-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M13 2c-1 1-1 2-1 2" />
    <svg:path
      d="M17 4c-.9 0-1.8.4-2.5 1.2a3.32 3.32 0 0 0-5 0C8.8 4.4 7.9 4 7 4c-2.8 0-5 4-5 9s2.2 9 5 9c.9 0 1.8-.4 2.5-1.2a3.32 3.32 0 0 0 5 0c.7.8 1.6 1.2 2.5 1.2 2.8 0 5-4 5-9s-2.2-9-5-9"
    />
    <svg:path d="M10 11 8 9l-2 2" />
    <svg:path d="m18 11-2-2-2 2" />
    <svg:path d="m6 15 2 2 2-2 2 2 2-2 2 2 2-2" />
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
export class SiPumpkinIcon {
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
