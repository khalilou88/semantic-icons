import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-chromecast-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.03231 17.4282V20.1744H4.77855C4.77855 18.6559 3.55082 17.4282 2.03231 17.4282ZM2.03231 13.8096V15.6189C4.52008 15.6189 6.58783 17.6544 6.58783 20.1744H8.39712C8.36481 16.6851 5.55395 13.8096 2.03231 13.8096ZM5.68319 7.44482V8.93102C9.26945 10.0941 12.1126 12.9696 13.2757 16.5559H18.3805V7.44482H5.68319ZM2.03231 10.1911V12.0003C6.58783 12.0003 10.2387 15.6835 10.2387 20.2067H12.0157C12.048 14.6497 7.55709 10.1911 2.03231 10.1911ZM20.2544 3.79395H3.80929C2.80772 3.79395 2 4.63397 2 5.63554V8.38177H3.80929V5.63554H20.1898V18.3328H13.825V20.1421H20.1898C21.1913 20.1421 21.9991 19.3344 21.9991 18.3328V5.63554C22.0314 4.56935 21.2237 3.79395 20.2544 3.79395Z"
      fill="#323544"
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
export class SiChromecastIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
