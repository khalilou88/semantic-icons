import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-datadotai-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>data.ai</svg:title>
    <svg:path
      d="M8.12 1.744.015 10.009 0 10.023l11.986 12.219.014.015 11.986-12.22.014-.014-8.115-8.273-.006-.006Zm1.207 1.02h5.326L11.99 5.41zm3.422 3.43 3.027-3.053L22.081 9.5h-6.054ZM8.211 3.14l3.04 3.072L7.999 9.5h-6.08Zm.62 6.977L12 6.876l3.169 3.242L12 19.842zm7.328.402h5.862l-8.793 9.005Zm-14.24 0h5.915l2.958 9.006Z"
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
export class SiDatadotaiIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
