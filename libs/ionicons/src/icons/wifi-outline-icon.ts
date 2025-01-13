import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wifi-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M318.586 363.5L256 424l-62.586-60.5S212 336 256 336s62.586 27.5 62.586 27.5zM407.31 278L372 312s-41-46-116-46-116 46-116 46l-35.31-34S142.5 214 256 214s151.31 64 151.31 64z"
      stroke="currentColor"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <svg:path
      d="M496 192l-36.69 35.5S386.5 141 256 141 52.69 227.5 52.69 227.5L16 192S88 88 256 88s240 104 240 104z"
      stroke="currentColor"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWifiOutlineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');

  readonly fill = input<string>('none');
}
