import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sun-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="12" cy="12" r="5"></svg:circle>
    <svg:line x1="12" y1="1" x2="12" y2="3"></svg:line>
    <svg:line x1="12" y1="21" x2="12" y2="23"></svg:line>
    <svg:line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></svg:line>
    <svg:line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></svg:line>
    <svg:line x1="1" y1="12" x2="3" y2="12"></svg:line>
    <svg:line x1="21" y1="12" x2="23" y2="12"></svg:line>
    <svg:line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></svg:line>
    <svg:line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></svg:line>
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
export class SiSunIcon {
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
