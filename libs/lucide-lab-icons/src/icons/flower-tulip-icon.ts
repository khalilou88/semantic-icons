import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-flower-tulip-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 7c-2-3.2-6-4-6-4v5c0 3.3 2.7 6 6 6v8" />
    <svg:path d="M9.5 4.5C10 3 12 2 12 2s2 1 2.5 2.5" />
    <svg:path d="M12 14c3.3 0 6-2.7 6-6V3c-6.2.9-10.8 11-6 11" />
    <svg:path d="M12 22c-4.2 0-7-1.7-7-5 4.2 0 7 1.7 7 5" />
    <svg:path d="M12 22c4.2 0 7-1.7 7-5-4.2 0-7 1.7-7 5" />
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
export class SiFlowerTulipIcon {
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
