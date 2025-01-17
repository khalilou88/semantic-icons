import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-sd-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="sd-a">
        <svg:path fill-opacity=".7" d="M0 0h496v496H0z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#sd-a)"
      transform="scale(1.0321)"
    >
      <svg:path fill="#000001" d="M0 330.7h992.1v165.4H0z" />
      <svg:path fill="#fff" d="M0 165.3h992.1v165.4H0z" />
      <svg:path fill="red" d="M0 0h992.9v165.4H0z" />
      <svg:path fill="#009a00" d="M0 0v496l330.7-248z" />
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
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
