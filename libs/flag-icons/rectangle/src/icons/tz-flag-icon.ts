import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tz-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="tz-a">
        <svg:path fill-opacity=".7" d="M10 0h160v120H10z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#tz-a)"
      transform="matrix(4 0 0 4 -40 0)"
    >
      <svg:path fill="#09f" d="M0 0h180v120H0z" />
      <svg:path fill="#090" d="M0 0h180L0 120z" />
      <svg:path fill="#000001" d="M0 120h40l140-95V0h-40L0 95z" />
      <svg:path
        fill="#ff0"
        d="M0 91.5 137.2 0h13.5L0 100.5zM29.3 120 180 19.5v9L42.8 120z"
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
export class SiTzFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}
