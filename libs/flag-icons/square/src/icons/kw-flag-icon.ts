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
        <svg:path fill-opacity=".7" d="M0 0h496v496H0z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#kw-a)"
      transform="scale(1.0321)"
    >
      <svg:path fill="#fff" d="M0 165.3h992.1v165.4H0z" />
      <svg:path fill="#f31830" d="M0 330.7h992.1v165.4H0z" />
      <svg:path fill="#00d941" d="M0 0h992.1v165.4H0z" />
      <svg:path fill="#000001" d="M0 0v496l247.5-165.3.5-165.5z" />
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

  readonly viewBox = input<string>('0 0 512 512');
}
