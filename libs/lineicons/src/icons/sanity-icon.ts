import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sanity-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:g opacity="0.7">
      <svg:path
        d="M16.9267 11.4231V13.9151H16.1076V11.8486L16.9267 11.4231Z"
        fill="#323544"
      />
      <svg:path
        d="M5.96512 13.9778L7.87918 12.977L7.64322 12.3658L6.38308 12.9534L5.96512 13.9778Z"
        fill="#323544"
      />
      <svg:path
        d="M16.1076 11.8465L18.1842 10.7838L17.8333 10.1905L16.1076 11.0338V11.8465Z"
        fill="#323544"
      />
      <svg:path
        d="M10.2594 11.2258V13.9151H9.4783V10.0851L10.2594 11.2258Z"
        fill="#323544"
      />
      <svg:path
        d="M7.14862 11.0771L5.96512 13.9778L5.3564 13.4538L6.76657 10.0851L7.14862 11.0771Z"
        fill="#323544"
      />
      <svg:path
        d="M6.76657 10.0851H7.57342L9.0657 13.9151H8.23983L6.76657 10.0851Z"
        fill="#323544"
      />
      <svg:path
        d="M10.3802 10.0851L12.1004 12.7018V13.9151L9.4783 10.0851H10.3802Z"
        fill="#323544"
      />
      <svg:path
        d="M14.3867 10.0851H13.5737V13.9158H14.3867V10.0851Z"
        fill="#323544"
      />
      <svg:path
        d="M14.8563 10.7838V10.0851H17.7709L18.1842 10.7838L14.8563 10.7838Z"
        fill="#323544"
      />
      <svg:path d="M20.5844 12.4618V13.9151H19.7775V12.4618" fill="#323544" />
      <svg:path
        d="M19.7775 12.4618L21.1429 10.0851H22L20.5844 12.4618H19.7775Z"
        fill="#323544"
      />
      <svg:path
        d="M19.7775 12.4618L18.3742 10.0851H19.257L20.2078 11.7138L19.7775 12.4618Z"
        fill="#323544"
      />
      <svg:path
        d="M2.32778 10.5271C2.32778 11.0605 2.66301 11.3778 3.33416 11.5451L4.04534 11.7071C4.68051 11.8505 5.06733 12.2065 5.06733 12.7865C5.07227 13.0391 4.98864 13.2858 4.83049 13.4851C4.83049 12.9065 4.5258 12.5938 3.79086 12.4058L3.09257 12.2498C2.5334 12.1245 2.1018 11.8318 2.1018 11.2018C2.09886 10.9585 2.17836 10.7212 2.32778 10.5271Z"
        fill="#323544"
      />
      <svg:path
        d="M12.1004 10.0851H12.8815V13.9151H12.1004V10.0851Z"
        fill="#323544"
      />
      <svg:path
        d="M4.39346 12.6445C4.69679 12.8351 4.8298 13.1018 4.8298 13.4845C4.57872 13.8004 4.13762 13.9778 3.61916 13.9778C2.74647 13.9778 2.13572 13.5558 2 12.8225H2.83808C2.94598 13.1591 3.23168 13.3151 3.61306 13.3151C4.07859 13.3151 4.38802 13.0711 4.39413 12.6431"
        fill="#323544"
      />
      <svg:path
        d="M2.76342 11.3178C2.6249 11.2369 2.51126 11.1207 2.43456 10.9815C2.35785 10.8423 2.32097 10.6853 2.32778 10.5271C2.57004 10.2138 2.99143 10.0225 3.50514 10.0225C4.39412 10.0225 4.9085 10.4838 5.0354 11.1331H4.22922C4.14032 10.8771 3.91773 10.6778 3.51193 10.6778C3.0783 10.6778 2.78242 10.9258 2.76546 11.3178"
        fill="#323544"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSanityIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
