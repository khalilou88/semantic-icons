import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-icecream-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="currentColor" d="M16 12H8l4 9 4-9Z" />
    <svg:path
      fill="currentColor"
      d="M14 6c0 .55228.4477 1 1 1s1-.44772 1-1h-2ZM9.78743 9.33273c.45987.30579 1.08057.18085 1.38637-.27906.3058-.4599.1809-1.08062-.279-1.3864L9.78743 9.33273ZM15.3893 11c-.5523 0-1 .4477-1 1s.4477 1 1 1v-2Zm-2.2126-5.33273c-.4599.30578-.5848.9265-.2791 1.3864.3058.45991.9265.58485 1.3865.27906l-1.1074-1.66546ZM8 12v-1c-.33851 0-.65403.1713-.83849.4551-.18446.2838-.2128.6417-.07532.951L8 12Zm8 0 .9138.4061c.1375-.3093.1091-.6672-.0753-.951C16.654 11.1713 16.3385 11 16 11v1Zm-4 9-.9138.4061c.1605.3612.5186.5939.9138.5939s.7533-.2327.9138-.5939L12 21ZM10 6c0-1.10457.8954-2 2-2V2C9.79086 2 8 3.79086 8 6h2Zm2-2c1.1046 0 2 .89543 2 2h2c0-2.20914-1.7909-4-4-4v2Zm-1.1052 3.66727C10.3533 7.30728 10 6.69469 10 6H8c0 1.39228.71216 2.6178 1.78743 3.33273l1.10737-1.66546ZM9 11c-1.10457 0-2-.8954-2-2H5c0 2.2091 1.79086 4 4 4v-2ZM7 9c0-1.10457.89543-2 2-2V5C6.79086 5 5 6.79086 5 9h2Zm10.3893 0c0 1.1046-.8955 2-2 2v2c2.2091 0 4-1.7909 4-4h-2Zm-2-2c1.1045 0 2 .89543 2 2h2c0-2.20914-1.7909-4-4-4v2Zm-1.1052.33273C14.6002 7.1225 14.9789 7 15.3893 7V5c-.8164 0-1.5785.24565-2.2126.66727l1.1074 1.66546ZM8 13h8v-2H8v2Zm7.0862-1.4061-4 9 1.8276.8122 4-9-1.8276-.8122Zm-2.1724 9-3.99999-9-1.82762.8122 4.00001 9 1.8276-.8122Z"
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
export class SiIcecreamAltIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
