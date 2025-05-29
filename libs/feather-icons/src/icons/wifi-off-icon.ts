import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-wifi-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:line x1="1" y1="1" x2="23" y2="23"></svg:line>
    <svg:path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></svg:path>
    <svg:path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></svg:path>
    <svg:path d="M10.71 5.05A16 16 0 0 1 22.58 9"></svg:path>
    <svg:path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></svg:path>
    <svg:path d="M8.53 16.11a6 6 0 0 1 6.95 0"></svg:path>
    <svg:line x1="12" y1="20" x2="12.01" y2="20"></svg:line>
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
export class SiWifiOffIcon {
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
