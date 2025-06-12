import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-flower-stem-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M9 8h1" />
    <svg:path d="M12 5v1" />
    <svg:path d="M15 8h-1" />
    <svg:circle cx="12" cy="8" r="2" />
    <svg:path
      d="M12 11a3 3 0 1 1-3-3 3 3 0 1 1 3-3 3 3 0 1 1 3 3 3 3 0 1 1-3 3"
    />
    <svg:path d="M12 10v12" />
    <svg:path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5" />
    <svg:path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5" />
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
export class SiFlowerStemIcon {
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
