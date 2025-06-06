import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-avocado-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M17.8 14.04a3.905 3.905 0 0 1 1.337 -2.075c1.195 -.985 1.816 -2.285 1.863 -3.902c-.047 -1.43 -.54 -2.626 -1.477 -3.586c-.96 -.938 -2.156 -1.43 -3.585 -1.477c-1.618 .047 -2.918 .668 -3.903 1.863c-.562 .68 -1.254 1.125 -2.074 1.336c-.938 .188 -1.828 .48 -2.672 .88c-.844 .398 -1.559 .878 -2.144 1.44c-1.43 1.501 -2.145 3.224 -2.145 5.169c0 1.946 .715 3.668 2.145 5.168c1.5 1.429 3.222 2.144 5.168 2.144c1.945 0 3.667 -.715 5.167 -2.145c.563 -.585 1.055 -1.3 1.477 -2.144c.398 -.844 .68 -1.723 .844 -2.637v-.035z"
    />
    <svg:path
      d="M10.87 10.036c-.942 .112 -1.794 .538 -2.556 1.278c-.74 .762 -1.166 1.614 -1.278 2.556c-.135 .92 .112 1.704 .74 2.354c.65 .628 1.435 .875 2.354 .74c.942 -.112 1.794 -.538 2.556 -1.278c.74 -.762 1.166 -1.614 1.278 -2.556c.135 -.92 -.112 -1.704 -.74 -2.354c-.65 -.628 -1.435 -.875 -2.354 -.74z"
    />
  `,
  host: {
    role: 'img',
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
export class SiAvocadoIcon {
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
