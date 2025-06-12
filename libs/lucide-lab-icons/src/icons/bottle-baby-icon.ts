import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bottle-baby-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 11c1.1-1.4 1.3-3.3.7-4.9l.8-.8a1.5 1.5 0 0 0-2.8-2.8l-.8.8A5.33 5.33 0 0 0 13 4"
    />
    <svg:path
      d="M11.3 3.7a1 1 0 0 1 1.4 0l7.6 7.6a1 1 0 0 1 0 1.4l-1.6 1.6a1 1 0 0 1-1.4 0L9.7 6.7a1 1 0 0 1 0-1.4Z"
    />
    <svg:path
      d="m10 7-7.3 7.3c-.9.9-.9 2.5 0 3.4l3.6 3.6c.9.9 2.5.9 3.4 0L17 14"
    />
    <svg:path d="m4 13 2 2" />
    <svg:path d="m7 10 2 2" />
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
export class SiBottleBabyIcon {
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
