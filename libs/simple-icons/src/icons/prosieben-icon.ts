import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-prosieben-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>ProSieben</svg:title>
    <svg:path
      d="M.24 0H23.68V6.64H.24M23.76 7.92V24H.24s2.88-7.84 10.48-12.48c7.12-4.4 13.04-3.6 13.04-3.6Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiProsiebenIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#E6000F');
}
