import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-so-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="so-a">
        <svg:path fill-opacity=".7" d="M177.2 0h708.6v708.7H177.2z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      clip-path="url(#so-a)"
      transform="translate(-128)scale(.72249)"
    >
      <svg:path fill="#40a6ff" d="M0 0h1063v708.7H0z" />
      <svg:path
        fill="#fff"
        d="m643 527.6-114.3-74-113.6 74.8 42.3-121.5-113.5-75 140.4-1 43.5-121.1 44.5 120.8 140.3.1-112.9 75.7z"
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
export class SiSoFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
