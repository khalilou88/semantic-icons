import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ax-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="ax-a">
        <svg:path fill-opacity=".7" d="M166 0h850v850H166z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g clip-path="url(#ax-a)" transform="translate(-100)scale(.6024)">
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
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAxFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
