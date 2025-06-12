import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pig-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19 4.5a4.12 4.12 0 0 0-5.5 1.6C13 6 12.5 6 12 6c-4.4 0-8 2.7-8 6 0 1.5.8 2.9 2 4v2a2 2 0 0 0 2 2h2v-2.2a12.3 12.3 0 0 0 4 0V19c0 .6.4 1 1 1h3v-4c.7-.6 1.2-1.2 1.5-2H21c.6 0 1-.4 1-1v-3h-2.5c-.4-1-1.2-1.8-2.2-2.5Z"
    />
    <svg:path d="M16 11h.01" />
    <svg:path d="M2.3 7a2 2 0 0 0 2.2 2.9" />
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
export class SiPigIcon {
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
