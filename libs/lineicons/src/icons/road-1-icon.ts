import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-road-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.7486 5.75C12.7486 5.33579 12.4128 5 11.9986 5C11.5844 5 11.2486 5.33579 11.2486 5.75V7.3125C11.2486 7.72671 11.5844 8.0625 11.9986 8.0625C12.4128 8.0625 12.7486 7.72671 12.7486 7.3125V5.75Z"
      fill="#323544"
    />
    <svg:path
      d="M12.7486 10.4375C12.7486 10.0233 12.4128 9.6875 11.9986 9.6875C11.5844 9.6875 11.2486 10.0233 11.2486 10.4375L11.2486 13.5625C11.2486 13.9767 11.5844 14.3125 11.9986 14.3125C12.4128 14.3125 12.7486 13.9767 12.7486 13.5625V10.4375Z"
      fill="#323544"
    />
    <svg:path
      d="M12.7486 16.6875C12.7486 16.2733 12.4128 15.9375 11.9986 15.9375C11.5844 15.9375 11.2486 16.2733 11.2486 16.6875V18.25C11.2486 18.6642 11.5844 19 11.9986 19C12.4128 19 12.7486 18.6642 12.7486 18.25V16.6875Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.3819 2C6.20977 2 5.23399 2.89987 5.13926 4.06816L3.88251 19.5682C3.77629 20.8782 4.81081 22 6.12515 22H17.8721C19.1864 22 20.2209 20.8782 20.1147 19.5682L18.8579 4.06816C18.7632 2.89986 17.7874 2 16.6153 2H7.3819ZM6.63436 4.18939C6.66593 3.79996 6.99119 3.5 7.3819 3.5H16.6153C17.006 3.5 17.3313 3.79995 17.3628 4.18939L18.6196 19.6894C18.655 20.1261 18.3102 20.5 17.8721 20.5H6.12515C5.68703 20.5 5.34219 20.1261 5.3776 19.6894L6.63436 4.18939Z"
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
export class SiRoad1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
