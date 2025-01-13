import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bus-front-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M4 6 2 7" />
    <svg:path d="M10 6h4" />
    <svg:path d="m22 7-2-1" />
    <svg:rect width="16" height="16" x="4" y="3" rx="2" />
    <svg:path d="M4 11h16" />
    <svg:path d="M8 15h.01" />
    <svg:path d="M16 15h.01" />
    <svg:path d="M6 19v2" />
    <svg:path d="M18 21v-2" />
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
export class SiBusFrontIcon {
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
