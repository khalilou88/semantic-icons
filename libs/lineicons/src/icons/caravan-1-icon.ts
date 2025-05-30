import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-caravan-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.25 4.5C3.00736 4.5 2 5.50736 2 6.75V16.5C2 17.7426 3.00736 18.75 4.25 18.75H5.17071C5.58254 19.9152 6.69378 20.75 8 20.75C9.30622 20.75 10.4175 19.9152 10.8293 18.75H21.25C21.6642 18.75 22 18.4142 22 18C22 17.5858 21.6642 17.25 21.25 17.25H20.25V9.75C20.25 6.85051 17.8995 4.5 15 4.5H4.25ZM10.9585 17.25C10.7205 15.8311 9.4865 14.75 8 14.75C6.5135 14.75 5.27952 15.8311 5.04148 17.25H4.25C3.83579 17.25 3.5 16.9142 3.5 16.5V6.75C3.5 6.33579 3.83579 6 4.25 6H15C17.0711 6 18.75 7.67893 18.75 9.75V17.25H10.9585ZM6.5 17.75C6.5 16.9216 7.17157 16.25 8 16.25C8.82843 16.25 9.5 16.9216 9.5 17.75C9.5 18.5784 8.82843 19.25 8 19.25C7.17157 19.25 6.5 18.5784 6.5 17.75Z"
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
export class SiCaravan1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
