import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cw-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="cw-a">
        <svg:path fill-opacity=".7" d="M0 0h682.7v512H0z" />
      </svg:clipPath>
      <svg:path id="cw-b" d="m0-1 .2.7H1L.3 0l.2.7L0 .4l-.6.4.2-.7-.5-.4h.7z" />
    </svg:defs>
    <svg:g clip-path="url(#cw-a)" transform="scale(.94)">
      <svg:path fill="#002b7f" d="M0 0h768v512H0z" />
      <svg:path fill="#f9e814" d="M0 320h768v64H0z" />
      <svg:use
        xlink:href="#cw-b"
        width="13500"
        height="9000"
        x="2"
        y="2"
        fill="#fff"
        transform="scale(42.67)"
      />
      <svg:use
        xlink:href="#cw-b"
        width="13500"
        height="9000"
        x="3"
        y="3"
        fill="#fff"
        transform="scale(56.9)"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCwFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}
