import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-ax-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="ax-a">
        <svg:path fill-opacity=".7" d="M106.3 0h1133.3v850H106.3z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g clip-path="url(#ax-a)" transform="matrix(.56472 0 0 .56482 -60 -.1)">
      <svg:path fill="#0053a5" d="M0 0h1300v850H0z" />
      <svg:g fill="#ffce00">
        <svg:path d="M400 0h250v850H400z" />
        <svg:path d="M0 300h1300v250H0z" />
      </svg:g>
      <svg:g fill="#d21034">
        <svg:path d="M475 0h100v850H475z" />
        <svg:path d="M0 375h1300v100H0z" />
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
export class SiAxFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}
