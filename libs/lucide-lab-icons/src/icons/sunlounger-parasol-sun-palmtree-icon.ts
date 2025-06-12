import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sunlounger-parasol-sun-palmtree-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="4" cy="4" r="2" />
    <svg:path d="M16 14s1-3 1-8V4s-1-2-3-2c-1 0-2 .5-2 .5" />
    <svg:path d="M13 8a4 4 0 0 1 8 0" />
    <svg:path d="M17 4s1-2 3-2c1 0 2 .5 2 .5" />
    <svg:path d="m4 14 3-5 5 3Z" />
    <svg:path d="m8 13 2 8" />
    <svg:path d="m3 21 .7-2.1c.2-.5.7-.9 1.3-.9h12c.5 0 1.3-.4 1.6-.8L22 13" />
    <svg:path d="m21 21-3-3" />
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
export class SiSunloungerParasolSunPalmtreeIcon {
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
