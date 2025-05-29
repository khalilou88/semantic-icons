import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-triangle-dashed-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M10.17 4.193a2 2 0 0 1 3.666.013" />
    <svg:path d="M14 21h2" />
    <svg:path d="m15.874 7.743 1 1.732" />
    <svg:path d="m18.849 12.952 1 1.732" />
    <svg:path d="M21.824 18.18a2 2 0 0 1-1.835 2.824" />
    <svg:path d="M4.024 21a2 2 0 0 1-1.839-2.839" />
    <svg:path d="m5.136 12.952-1 1.732" />
    <svg:path d="M8 21h2" />
    <svg:path d="m8.102 7.743-1 1.732" />
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
export class SiTriangleDashedIcon {
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
