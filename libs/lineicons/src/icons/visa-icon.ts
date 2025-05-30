import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-visa-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.0267 8.75977C13.6066 8.75977 12.3376 9.49582 12.3376 10.8557C12.3376 12.4153 14.5883 12.523 14.5883 13.3065C14.5883 13.6364 14.2102 13.9317 13.5645 13.9317C12.6482 13.9317 11.9633 13.5191 11.9633 13.5191L11.6702 14.8914C11.6702 14.8914 12.4592 15.2399 13.5067 15.2399C15.0593 15.2399 16.281 14.4677 16.281 13.0846C16.281 11.4366 14.021 11.3321 14.021 10.6049C14.021 10.3464 14.3313 10.0633 14.9752 10.0633C15.7016 10.0633 16.2943 10.3634 16.2943 10.3634L16.5811 9.03798C16.5811 9.03798 15.9362 8.75977 15.0267 8.75977ZM2.03439 8.85981L2 9.05987C2 9.05987 2.59744 9.1692 3.13552 9.38731C3.82833 9.6374 3.8777 9.78301 3.99437 10.2352L5.26585 15.1368H6.97031L9.59614 8.85981H7.8956L6.20835 13.1275L5.51986 9.51C5.45672 9.09598 5.13688 8.85981 4.74539 8.85981H2.03439ZM10.2799 8.85981L8.94593 15.1367H10.5675L11.8969 8.85979H10.2799V8.85981ZM19.3242 8.85981C18.9331 8.85981 18.726 9.06916 18.5739 9.43498L16.1982 15.1367H17.8987L18.2277 14.1864H20.2995L20.4995 15.1367H22L20.691 8.85981H19.3242ZM19.5453 10.5556L20.0494 12.9111H18.699L19.5453 10.5556Z"
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
export class SiVisaIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
