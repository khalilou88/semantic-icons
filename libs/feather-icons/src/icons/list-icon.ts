import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-list-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:line x1="8" y1="6" x2="21" y2="6"></svg:line>
    <svg:line x1="8" y1="12" x2="21" y2="12"></svg:line>
    <svg:line x1="8" y1="18" x2="21" y2="18"></svg:line>
    <svg:line x1="3" y1="6" x2="3.01" y2="6"></svg:line>
    <svg:line x1="3" y1="12" x2="3.01" y2="12"></svg:line>
    <svg:line x1="3" y1="18" x2="3.01" y2="18"></svg:line>
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
export class SiListIcon {
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
