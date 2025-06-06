import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bv-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="bv-a">
        <svg:path fill-opacity=".7" d="M0 0h640v480H0z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#bv-a)">
      <svg:path fill="#fff" d="M-28 0h699.7v512H-28z" />
      <svg:path
        fill="#d72828"
        d="M-53-77.8h218.7v276.2H-53zM289.4-.6h381v199h-381zM-27.6 320h190.4v190.3H-27.6zm319.6 2.1h378.3v188.2H292z"
      />
      <svg:path fill="#003897" d="M196.7-25.4H261v535.7h-64.5z" />
      <svg:path fill="#003897" d="M-27.6 224.8h698v63.5h-698z" />
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
export class SiBvFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}
