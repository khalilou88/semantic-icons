import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pw-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="pw-a">
        <svg:path fill-opacity=".7" d="M61.7 4.2h170.8V175H61.7z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#pw-a)"
      transform="translate(-185 -12.5)scale(2.9973)"
    >
      <svg:path fill="#4aadd6" d="M0 4.2h301.2V175H0z" />
      <svg:path
        fill="#ffde00"
        d="M185.9 86.8a52 52 0 0 1-53 50.8 52 52 0 0 1-53.2-50.8c0-28 23.8-50.8 53.1-50.8s53 22.7 53 50.8z"
      />
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
export class SiPwFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
