import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sliders-vertical-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:line x1="4" x2="4" y1="21" y2="14" />
    <svg:line x1="4" x2="4" y1="10" y2="3" />
    <svg:line x1="12" x2="12" y1="21" y2="12" />
    <svg:line x1="12" x2="12" y1="8" y2="3" />
    <svg:line x1="20" x2="20" y1="21" y2="16" />
    <svg:line x1="20" x2="20" y1="12" y2="3" />
    <svg:line x1="2" x2="6" y1="14" y2="14" />
    <svg:line x1="10" x2="14" y1="8" y2="8" />
    <svg:line x1="18" x2="22" y1="16" y2="16" />
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
export class SiSlidersVerticalIcon {
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
