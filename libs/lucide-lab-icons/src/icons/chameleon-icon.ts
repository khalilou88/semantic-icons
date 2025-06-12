import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-chameleon-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11 22c-5 0-9-4.5-9-10S6 2 11 2c2.2 0 4.2.9 5.7 2.3L19.3 2c3.1 3.1 3.5 7.9 1.3 11.4-.6.9-1.9.9-2.7.1l-1.2-1.2C15.2 10.9 13.2 10 11 10a6 6 0 0 0 0 12 4 4 0 0 0 0-8 2 2 0 0 0 0 4"
    />
    <svg:path d="M14 7h.01" />
    <svg:circle cx="14.5" cy="7" r="3.5" />
    <svg:path d="M8 10.8 6 10l1-2" />
    <svg:path d="M22 22a2 2 0 0 1-2-2v-6.1" />
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
export class SiChameleonIcon {
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
