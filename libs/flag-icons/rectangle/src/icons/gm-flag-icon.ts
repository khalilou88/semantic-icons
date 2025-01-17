import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-gm-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="gm-a">
        <svg:path fill-opacity=".7" d="M0-48h640v480H0z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#gm-a)"
      transform="translate(0 48)"
    >
      <svg:path fill="red" d="M0-128h640V85.3H0z" />
      <svg:path fill="#fff" d="M0 85.3h640V121H0z" />
      <svg:path fill="#009" d="M0 120.9h640V263H0z" />
      <svg:path fill="#fff" d="M0 263.1h640v35.6H0z" />
      <svg:path fill="#090" d="M0 298.7h640V512H0z" />
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
export class SiGmFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
