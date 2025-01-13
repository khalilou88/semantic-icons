import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-rocking-chair-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:polyline points="3.5 2 6.5 12.5 18 12.5" />
    <svg:line x1="9.5" x2="5.5" y1="12.5" y2="20" />
    <svg:line x1="15" x2="18.5" y1="12.5" y2="20" />
    <svg:path d="M2.75 18a13 13 0 0 0 18.5 0" />
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
export class SiRockingChairIcon {
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
