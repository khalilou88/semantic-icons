import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hexagons-7-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.3 4.3v3.9L2 10.1v3.8l3.3 1.9v3.9l3.4 1.9 3.3-1.9 3.3 1.9 3.4-1.9v-3.9l3.3-1.9v-3.8l-3.3-1.9V4.3l-3.4-1.9L12 4.3 8.7 2.4Z"
    />
    <svg:path d="M12 8.2V4.3" />
    <svg:path d="m18.7 8.2-3.4 1.9" />
    <svg:path d="m15.3 13.9 3.4 1.9" />
    <svg:path d="M12 19.7v-3.9" />
    <svg:path d="m8.7 13.9-3.4 1.9" />
    <svg:path d="m5.3 8.2 3.4 1.9" />
    <svg:path d="m8.7 13.9 3.3 1.9 3.3-1.9v-3.8L12 8.2l-3.3 1.9Z" />
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
export class SiHexagons7Icon {
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
