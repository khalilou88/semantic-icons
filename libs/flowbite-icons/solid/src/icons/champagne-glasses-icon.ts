import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-champagne-glasses-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      fill-rule="evenodd"
      d="M17.6647 3.69423c-.0811-.25251-.2591-.46247-.495-.58368-.2359-.12121-.5103-.14375-.7628-.06265l-5.7127 1.83462c-.1263.04057-.2389.10389-.3349.18397C10.2478 5.02354 10.1266 5 10 5H4c-.55228 0-1 .44772-1 1v6c0 1.8638 1.27477 3.4299 3 3.874V19H5c-.55228 0-1 .4477-1 1s.44772 1 1 1h4c.55228 0 1-.4477 1-1s-.44772-1-1-1H8v-3.126c1.72523-.4441 3-2.0102 3-3.874V9.10505l.8825 2.74795c.5699 1.7746 2.2625 2.8759 4.0409 2.7712l.9558 2.9763-.9521.3057c-.5258.1689-.8152.7321-.6463 1.2579.1689.5258.732.8152 1.2579.6463l3.8084-1.2231c.5258-.1688.8152-.732.6463-1.2578-.1688-.5259-.732-.8152-1.2578-.6464l-.9522.3058-.9558-2.9763c1.5068-.9503 2.2417-2.8312 1.6718-4.60574l-1.8347-5.71263ZM9 7v1H5V7h4Zm7.0663-1.74212.3058.9521-3.8085 1.22309-.3057-.95211 3.8084-1.22308Z"
      clip-rule="evenodd"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiChampagneGlassesIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
