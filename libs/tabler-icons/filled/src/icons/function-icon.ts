import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-function-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M17.333 3a3.667 3.667 0 0 1 3.667 3.667v10.666a3.667 3.667 0 0 1 -3.667 3.667h-10.666a3.667 3.667 0 0 1 -3.667 -3.667v-10.666a3.667 3.667 0 0 1 3.667 -3.667zm-3.583 3a2.38 2.38 0 0 0 -2.37 2.145l-.285 2.855h-2.095l-.117 .007a1 1 0 0 0 .117 1.993h1.894l-.265 2.656l-.014 .071a.38 .38 0 0 1 -.365 .273a.25 .25 0 0 1 -.25 -.25v-.25l-.007 -.117a1 1 0 0 0 -1.993 .117v.25l.005 .154a2.25 2.25 0 0 0 2.245 2.096a2.38 2.38 0 0 0 2.37 -2.145l.284 -2.855h2.096l.117 -.007a1 1 0 0 0 -.117 -1.993h-1.895l.266 -2.656l.014 -.071a.381 .381 0 0 1 .365 -.273a.25 .25 0 0 1 .25 .25v.25l.007 .117a1 1 0 0 0 1.993 -.117v-.25l-.005 -.154a2.25 2.25 0 0 0 -2.245 -2.096z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFunctionIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
