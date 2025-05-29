import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cpu-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect x="4" y="4" width="16" height="16" rx="2" ry="2"></svg:rect>
    <svg:rect x="9" y="9" width="6" height="6"></svg:rect>
    <svg:line x1="9" y1="1" x2="9" y2="4"></svg:line>
    <svg:line x1="15" y1="1" x2="15" y2="4"></svg:line>
    <svg:line x1="9" y1="20" x2="9" y2="23"></svg:line>
    <svg:line x1="15" y1="20" x2="15" y2="23"></svg:line>
    <svg:line x1="20" y1="9" x2="23" y2="9"></svg:line>
    <svg:line x1="20" y1="14" x2="23" y2="14"></svg:line>
    <svg:line x1="1" y1="9" x2="4" y2="9"></svg:line>
    <svg:line x1="1" y1="14" x2="4" y2="14"></svg:line>
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
export class SiCpuIcon {
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
