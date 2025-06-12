import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pie-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M7 2C5.5 4 8.5 5 7 7" />
    <svg:path d="M12 2c-1.5 2 1.5 3 0 5" />
    <svg:path d="M17 2c-1.5 2 1.5 3 0 5" />
    <svg:path
      d="M21 16s-2-5-9-5-9 5-9 5l1.7 5.1c.2.5.7.9 1.3.9h12c.5 0 1.1-.4 1.3-.9Z"
    />
    <svg:path
      d="M2 16c1.7 0 1.6 1 3.3 1C7 17 7 16 8.7 16s1.6 1 3.3 1c1.7 0 1.7-1 3.3-1 1.7 0 1.6 1 3.3 1 1.7 0 1.7-1 3.3-1"
    />
    <svg:path d="m8.5 16 1.5 6" />
    <svg:path d="M15.5 16 14 22" />
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
export class SiPieIcon {
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
