import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-loader-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:line x1="12" y1="2" x2="12" y2="6"></svg:line>
    <svg:line x1="12" y1="18" x2="12" y2="22"></svg:line>
    <svg:line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></svg:line>
    <svg:line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></svg:line>
    <svg:line x1="2" y1="12" x2="6" y2="12"></svg:line>
    <svg:line x1="18" y1="12" x2="22" y2="12"></svg:line>
    <svg:line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></svg:line>
    <svg:line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></svg:line>
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
export class SiLoaderIcon {
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
