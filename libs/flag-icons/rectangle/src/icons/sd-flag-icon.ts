import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sd-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="sd-a">
        <svg:path fill-opacity=".7" d="M0 0h682.7v512H0z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#sd-a)"
      transform="scale(.9375)"
    >
      <svg:path fill="#000001" d="M0 341.3h1024V512H0z" />
      <svg:path fill="#fff" d="M0 170.6h1024v170.7H0z" />
      <svg:path fill="red" d="M0 0h1024.8v170.7H0z" />
      <svg:path fill="#009a00" d="M0 0v512l341.3-256z" />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSdFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
