import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-ps-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="ps-a">
        <svg:path fill-opacity=".7" d="M-118 0h682.7v512H-118z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g clip-path="url(#ps-a)" transform="translate(110.6)scale(.9375)">
      <svg:g fill-rule="evenodd" stroke-width="1pt">
        <svg:path fill="#000001" d="M-246 0H778v170.7H-246z" />
        <svg:path fill="#fff" d="M-246 170.7H778v170.6H-246z" />
        <svg:path fill="#090" d="M-246 341.3H778V512H-246z" />
        <svg:path fill="red" d="m-246 512 512-256L-246 0z" />
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
export class SiPsFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}
