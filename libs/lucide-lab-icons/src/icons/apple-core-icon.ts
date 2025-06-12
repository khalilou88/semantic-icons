import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-apple-core-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M14 2a2 2 0 0 0-2 2v2.53" />
    <svg:path
      d="M12 6.53a5.98 5.98 0 0 0-8.5.5 4 4 0 0 1 4.02 5.86 4 4 0 0 1-1.76 7.04C6.82 21.17 7.97 22 9 22c1.5 0 1.5-1 3-1s1.5 1 3 1c1.03 0 2.18-.83 3.24-2.07a4 4 0 0 1-1.76-7.03 4 4 0 0 1 4.02-5.87 5.99 5.99 0 0 0-8.5-.5Z"
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
export class SiAppleCoreIcon {
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
