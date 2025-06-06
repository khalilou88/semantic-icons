import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-kr-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="kr-a">
        <svg:path fill-opacity=".7" d="M-95.8-.4h682.7v512H-95.8z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      clip-path="url(#kr-a)"
      transform="translate(89.8 .4)scale(.9375)"
    >
      <svg:path fill="#fff" d="M-95.8-.4H587v512H-95.8Z" />
      <svg:g transform="rotate(-56.3 361.6 -101.3)scale(10.66667)">
        <svg:g id="kr-c">
          <svg:path
            id="kr-b"
            fill="#000001"
            d="M-6-26H6v2H-6Zm0 3H6v2H-6Zm0 3H6v2H-6Z"
          />
          <svg:use xlink:href="#kr-b" width="100%" height="100%" y="44" />
        </svg:g>
        <svg:path stroke="#fff" d="M0 17v10" />
        <svg:path fill="#cd2e3a" d="M0-12a12 12 0 0 1 0 24Z" />
        <svg:path fill="#0047a0" d="M0-12a12 12 0 0 0 0 24A6 6 0 0 0 0 0Z" />
        <svg:circle cy="-6" r="6" fill="#cd2e3a" />
      </svg:g>
      <svg:g transform="rotate(-123.7 191.2 62.2)scale(10.66667)">
        <svg:use xlink:href="#kr-c" width="100%" height="100%" />
        <svg:path stroke="#fff" d="M0-23.5v3M0 17v3.5m0 3v3" />
      </svg:g>
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
export class SiKrFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}
