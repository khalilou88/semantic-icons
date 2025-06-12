import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ufo-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M18 8c0 1-3 2-6 2S6 9 6 8a6 6 0 0 1 12 0" />
    <svg:path d="M7 13h.01" />
    <svg:path d="M12 14h.01" />
    <svg:path d="M17 13h.01" />
    <svg:path
      d="M6 8.1c-2.4 1-4 2.6-4 4.4 0 3 4.5 5.5 10 5.5s10-2.5 10-5.5c0-1.8-1.6-3.4-4-4.4"
    />
    <svg:path d="m7 22 2-4" />
    <svg:path d="m17 22-2-4" />
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
export class SiUfoIcon {
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
