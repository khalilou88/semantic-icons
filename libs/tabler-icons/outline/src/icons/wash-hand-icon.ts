import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wash-hand-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M3.486 8.965c.168 .02 .34 .033 .514 .035c.79 .009 1.539 -.178 2 -.5c.426 -.296 .777 -.5 1.5 -.5h1"
    />
    <svg:path
      d="M16 8l.615 .034c.552 .067 1.046 .23 1.385 .466c.461 .322 1.21 .509 2 .5c.17 0 .339 -.014 .503 -.034"
    />
    <svg:path
      d="M14 10.5l.586 .578a1.516 1.516 0 0 0 2 0c.476 -.433 .55 -1.112 .176 -1.622l-1.762 -2.456c-.37 -.506 -1.331 -1 -2 -1h-3.117a1 1 0 0 0 -.992 .876l-.499 3.986a3.857 3.857 0 0 0 2.608 4.138a2.28 2.28 0 0 0 3 -2.162v-2.338z"
    />
    <svg:path
      d="M3 6l1.721 10.329a2 2 0 0 0 1.973 1.671h10.612a2 2 0 0 0 1.973 -1.671l1.721 -10.329"
    />
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
export class SiWashHandIcon {
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
