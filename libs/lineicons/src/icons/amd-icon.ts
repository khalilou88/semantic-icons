import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-amd-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.6972 14.0683H5.588L5.24868 13.2498H3.40007L3.09093 14.0683H2L3.66668 9.93463H4.8607L6.6972 14.0683ZM4.27888 10.9224L3.6728 12.5285H4.94562L4.27888 10.9224ZM10.7264 9.93463H11.6234V14.0683H10.5929V11.4863L9.47773 12.7832H9.3202L8.20508 11.4863V14.0682H7.1746V9.93463H8.0716L9.3989 11.468L10.7264 9.93463ZM14.2344 9.93463C15.7435 9.93463 16.5191 10.874 16.5191 12.0074C16.5191 13.1953 15.7677 14.0683 14.1191 14.0683H12.4099V9.93463H14.2344ZM13.4403 13.3107H14.113C15.1494 13.3107 15.4585 12.6074 15.4585 12.0012C15.4585 11.292 15.0767 10.6922 14.1009 10.6922H13.4403V13.3107H13.4403ZM18.5692 10.9148L17.2699 9.61523H22V14.3455L20.7007 13.0461V10.9148H18.5692ZM18.5677 11.1752L17.23 12.5128V14.3853H19.1022L20.4399 13.0476H18.5677V11.1752Z"
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
export class SiAmdIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
