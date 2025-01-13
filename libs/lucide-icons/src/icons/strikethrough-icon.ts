import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-strikethrough-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M16 4H9a3 3 0 0 0-2.83 4" />
    <svg:path d="M14 12a4 4 0 0 1 0 8H6" />
    <svg:line x1="4" x2="20" y1="12" y2="12" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiStrikethroughIcon {
  readonly xmlns = input('http://www.w3.org/2000/svg');

  readonly width = input('24');

  readonly height = input('24');

  readonly viewBox = input('0 0 24 24');

  readonly fill = input('none');

  readonly stroke = input('currentColor');

  readonly strokeWidth = input<string>('2', {
    alias: 'stroke-width',
  });

  readonly strokeLinecap = input<string>('round', {
    alias: 'stroke-linecap',
  });

  readonly strokeLinejoin = input<string>('round', {
    alias: 'stroke-linejoin',
  });
}
