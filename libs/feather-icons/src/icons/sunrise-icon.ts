import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-sunrise-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M17 18a5 5 0 0 0-10 0"></svg:path>
    <svg:line x1="12" y1="2" x2="12" y2="9"></svg:line>
    <svg:line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></svg:line>
    <svg:line x1="1" y1="18" x2="3" y2="18"></svg:line>
    <svg:line x1="21" y1="18" x2="23" y2="18"></svg:line>
    <svg:line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></svg:line>
    <svg:line x1="23" y1="22" x2="1" y2="22"></svg:line>
    <svg:polyline points="8 6 12 2 16 6"></svg:polyline>
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
export class SiSunriseIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

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
