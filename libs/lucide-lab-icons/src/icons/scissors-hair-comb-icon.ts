import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-scissors-hair-comb-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M6 2C5 5 7 5 6 8" />
    <svg:path d="M10 2c-1 3 1 3 0 6" />
    <svg:circle cx="4" cy="20" r="2" />
    <svg:path d="M5.4 18.6 8 16" />
    <svg:path d="M10.8 13.2 14 10" />
    <svg:circle cx="12" cy="20" r="2" />
    <svg:path d="m2 10 8.6 8.6" />
    <svg:path d="M18 2h2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2" />
    <svg:path d="M18 6h4" />
    <svg:path d="M18 10h4" />
    <svg:path d="M18 14h4" />
    <svg:path d="M18 18h4" />
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
export class SiScissorsHairCombIcon {
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
