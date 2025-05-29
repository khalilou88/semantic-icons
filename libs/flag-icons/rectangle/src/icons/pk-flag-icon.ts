import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-pk-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="pk-a">
        <svg:path fill-opacity=".7" d="M-52.3 0h682.6v512H-52.3z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#pk-a)"
      transform="translate(49)scale(.9375)"
    >
      <svg:path fill="#0c590b" d="M-95 0h768v512H-95z" />
      <svg:path fill="#fff" d="M-95 0H97.5v512H-95z" />
      <svg:g fill="#fff">
        <svg:path
          d="m403.7 225.4-31.2-6.6-16.4 27.3-3.4-31.6-31-7.2 29-13-2.7-31.7 21.4 23.6 29.3-12.4-15.9 27.6 21 24z"
        />
        <svg:path
          d="M415.4 306a121 121 0 0 1-161.3 59.4 122 122 0 0 1-59.5-162.1A119 119 0 0 1 266 139a156 156 0 0 0-11.8 10.9A112.3 112.3 0 0 0 415.5 306z"
        />
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
export class SiPkFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}
