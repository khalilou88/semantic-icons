import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sliders-horizontal-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:line x1="21" x2="14" y1="4" y2="4" />
    <svg:line x1="10" x2="3" y1="4" y2="4" />
    <svg:line x1="21" x2="12" y1="12" y2="12" />
    <svg:line x1="8" x2="3" y1="12" y2="12" />
    <svg:line x1="21" x2="16" y1="20" y2="20" />
    <svg:line x1="12" x2="3" y1="20" y2="20" />
    <svg:line x1="14" x2="14" y1="2" y2="6" />
    <svg:line x1="8" x2="8" y1="10" y2="14" />
    <svg:line x1="16" x2="16" y1="18" y2="22" />
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
export class SiSlidersHorizontalIcon {
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
