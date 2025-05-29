import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-sliders-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:line x1="4" y1="21" x2="4" y2="14"></svg:line>
    <svg:line x1="4" y1="10" x2="4" y2="3"></svg:line>
    <svg:line x1="12" y1="21" x2="12" y2="12"></svg:line>
    <svg:line x1="12" y1="8" x2="12" y2="3"></svg:line>
    <svg:line x1="20" y1="21" x2="20" y2="16"></svg:line>
    <svg:line x1="20" y1="12" x2="20" y2="3"></svg:line>
    <svg:line x1="1" y1="14" x2="7" y2="14"></svg:line>
    <svg:line x1="9" y1="8" x2="15" y2="8"></svg:line>
    <svg:line x1="17" y1="16" x2="23" y2="16"></svg:line>
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
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSlidersIcon {
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
