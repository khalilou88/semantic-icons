import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-amazon-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.6262 14.6201C14.5191 16.2386 12.8976 17.0042 11.0007 17.0042C8.69659 17.0042 6.7243 15.2315 7.00788 12.8803C7.32248 10.272 9.34731 9.14962 12.716 8.73726C13.3171 8.66367 13.566 8.64299 14.8629 8.54691C14.9116 8.54331 14.9575 8.53988 15.001 8.5366C15.0008 8.46544 15.0007 8.39386 15.0007 8.32185C15.0007 6.52595 13.9328 5.30005 12.5007 5.30005C11.0638 5.30005 10.0603 6.0474 9.44592 7.82645L7.55546 7.17365C8.44288 4.60377 10.1935 3.30005 12.5007 3.30005C15.1034 3.30005 17.0007 5.47803 17.0007 8.32185C17.0007 10.9707 17.164 13.0776 17.484 13.8794C17.84 14.7715 17.9698 14.9959 18.3677 15.4921L16.8075 16.7434C16.2843 16.091 16.0549 15.6945 15.6264 14.6207L15.6262 14.6201ZM21.2572 20.5453C20.9864 20.7452 20.5157 20.6263 20.7288 20.1048C20.9934 19.4569 21.2755 18.6971 20.9911 18.3527C20.7807 18.098 20.5235 17.9711 19.9637 17.9711C19.5041 17.9711 19.2733 18.0305 18.9688 18.0508C18.7646 18.0645 18.6753 17.7537 18.8775 17.6109C19.1393 17.426 19.4216 17.2811 19.7483 17.1833C20.8979 16.8389 22.253 17.0276 22.4172 17.2658C22.7826 17.7959 22.2189 19.835 21.2572 20.5453ZM20.0754 19.4608C19.8136 19.7164 19.5299 19.9496 19.2462 20.156C17.1235 21.7716 14.3748 22.6169 11.9875 22.6169C8.14505 22.6169 4.70765 20.8226 2.10014 17.8212C1.87644 17.5906 2.06133 17.2555 2.32314 17.4369C5.13247 19.5136 8.6108 20.7699 12.2112 20.7699C14.4772 20.7699 16.9195 20.2329 19.2462 19.0775C19.4085 19.0007 19.5906 18.8961 19.7501 18.8228C20.117 18.6128 20.4395 19.1293 20.0754 19.4608ZM15.0107 10.5414C13.7522 10.6347 13.5147 10.6544 12.959 10.7224C10.4062 11.0349 9.16175 11.7247 8.99349 13.1198C8.86763 14.1633 9.80321 15.0042 11.0007 15.0042C13.0397 15.0042 14.5179 13.7764 15.0227 10.5406C15.0187 10.5409 15.0147 10.5411 15.0107 10.5414Z"
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
export class SiAmazonLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
