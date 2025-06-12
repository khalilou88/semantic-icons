import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pig-head-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18 17.9c1.8-.9 3-2.5 3-5.1 0-1.8-.5-3.4-1.5-4.9 1.5-.3 2.5-1.5 2.5-3V3h-3c-1.3 0-2.4.8-2.8 2a10 10 0 0 0-8.4 0C7.4 3.8 6.3 3 5 3H2v2a3 3 0 0 0 2.5 2.9C3.5 9.3 3 11 3 12.8c0 2.6 1.2 4.2 3 5.1"
    />
    <svg:path d="M10 14v-2" />
    <svg:path d="M14 14v-2" />
    <svg:path d="M14 22a4 4 0 1 0-2-7.45A4 4 0 1 0 10 22Z" />
    <svg:path d="M10 18h.01" />
    <svg:path d="M14 18h.01" />
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
export class SiPigHeadIcon {
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
