import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cauldron-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="8" cy="3.5" r=".5" />
    <svg:circle cx="14" cy="6" r="2" />
    <svg:path d="M19 2h.01" />
    <svg:path d="M22 8H2" />
    <svg:path d="M7 12V8" />
    <svg:path d="M11 10V8" />
    <svg:path
      d="M4.4 8C2.9 9.5 2 11.4 2 13.5 2 18.2 6.5 22 12 22s10-3.8 10-8.5c0-2.1-.9-4-2.4-5.5"
    />
    <svg:path d="m5 20-1 2" />
    <svg:path d="m19 20 1 2" />
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
export class SiCauldronIcon {
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
