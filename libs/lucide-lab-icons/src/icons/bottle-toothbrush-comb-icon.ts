import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bottle-toothbrush-comb-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect width="4" height="4" x="2" y="3" />
    <svg:path
      d="M6 7v2c0 .6.1 1.4.2 2L8 20.8v.2c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V7"
    />
    <svg:path d="M14 2v7l-2 5v8" />
    <svg:rect width="4" height="6" x="10" y="3" />
    <svg:path d="M18 6h4" />
    <svg:path d="M18 10h4" />
    <svg:path d="M18 14h4" />
    <svg:path d="M18 18h4" />
    <svg:path d="M18 2h2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2" />
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
export class SiBottleToothbrushCombIcon {
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
