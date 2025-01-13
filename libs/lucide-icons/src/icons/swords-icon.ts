import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-swords-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
    <svg:line x1="13" x2="19" y1="19" y2="13" />
    <svg:line x1="16" x2="20" y1="16" y2="20" />
    <svg:line x1="19" x2="21" y1="21" y2="19" />
    <svg:polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
    <svg:line x1="5" x2="9" y1="14" y2="18" />
    <svg:line x1="7" x2="4" y1="17" y2="20" />
    <svg:line x1="3" x2="5" y1="19" y2="21" />
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
export class SiSwordsIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

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
