import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-toast-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.5 3A3.5 3.5 0 0 0 3 8.9V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.9A3.5 3.5 0 0 0 18.5 3Z"
    />
    <svg:path
      d="M7.5 10c0-1.8 1.2-3 3.2-3 2.5 0 2.4 1.5 3.8 2.5s2.5 1 2.5 3c0 2.2-1.2 3.2-3.5 3.2-1.2 0-1.2 1.2-3 1.2S7 16 7 14.2c0-1.5.8-1.5.8-2.5 0-.7-.3-1.2-.3-1.7"
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
export class SiToastIcon {
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
