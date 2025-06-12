import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hedgehog-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 11 3 7.7 5.7 7l.1-2.8 2.7.6 1.3-2.6L12 4l2.2-1.8 1.3 2.6 2.7-.6.1 2.8 2.7.7-1.2 2.5L22 12l-2.2 1.8 1.2 2.5-3 .7"
    />
    <svg:path d="M10 17h.01" />
    <svg:path
      d="M3 16c2.8 0 5-2.2 5-5 3.3 0 6 2.7 6 6a4 4 0 0 0 4 4h-8c-1.1 0-2.6-.6-3.4-1.4L3 16v-1"
    />
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
export class SiHedgehogIcon {
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
