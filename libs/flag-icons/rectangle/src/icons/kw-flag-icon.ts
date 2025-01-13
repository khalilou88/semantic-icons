import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-kw-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="kw-a">
        <svg:path fill-opacity=".7" d="M0 0h682.7v512H0z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#kw-a)"
      transform="scale(.9375)"
    >
      <svg:path fill="#fff" d="M0 170.6h1024v170.7H0z" />
      <svg:path fill="#f31830" d="M0 341.3h1024V512H0z" />
      <svg:path fill="#00d941" d="M0 0h1024v170.7H0z" />
      <svg:path fill="#000001" d="M0 0v512l255.4-170.7.6-170.8z" />
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
export class SiKwFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
