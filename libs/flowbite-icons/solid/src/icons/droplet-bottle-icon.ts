import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-droplet-bottle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      d="M12 11c-.2397 0-.4128.0858-.4729.1174-.0773.0408-.1341.0834-.1648.1078-.0624.0495-.1092.098-.1334.1237-.0529.0565-.1019.1178-.1405.168-.0816.106-.1784.2437-.2809.3972-.2074.3103-.467.7284-.7219 1.1808-.25372.4504-.51297.9528-.71184 1.4282C9.19074 14.9607 9 15.5086 9 16c0 1.6569 1.3431 3 3 3s3-1.3431 3-3c0-.4914-.1907-1.0393-.3738-1.4769-.1988-.4754-.4581-.9778-.7118-1.4282-.2549-.4524-.5145-.8705-.7219-1.1808-.1025-.1535-.1993-.2912-.2809-.3972-.0386-.0502-.0876-.1115-.1405-.168-.0242-.0257-.071-.0742-.1334-.1237-.0307-.0244-.0875-.067-.1648-.1078C12.4128 11.0858 12.2397 11 12 11Z"
    />
    <svg:path
      fill="currentColor"
      fill-rule="evenodd"
      d="M10 2c-.55228 0-1 .44772-1 1v2c-.55228 0-1 .44772-1 1s.44772 1 1 1v1.51594C7.03885 10.1474 6 12.2926 6 14.5V19c0 1.6568 1.34314 3 3 3h6c1.6569 0 3-1.3431 3-3v-4.5c0-2.2074-1.0389-4.3526-3-5.98406V7c.5523 0 1-.44772 1-1s-.4477-1-1-1V3c0-.55228-.4477-1-1-1h-4Zm1 7V7h2v2c0 .31476.1482.61115.4.8 1.7804 1.3353 2.6 3.0529 2.6 4.7V19c0 .5523-.4477 1-1 1H9c-.55228 0-1-.4477-1-1v-4.5c0-1.6471.81961-3.3647 2.6-4.7.2518-.18885.4-.48524.4-.8Z"
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
export class SiDropletBottleIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
