import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-text-format-remove-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.41955 4.9454C9.29918 4.67455 9.03059 4.5 8.7342 4.5C8.43781 4.5 8.16922 4.67454 8.04884 4.94539L3.15986 15.9452C2.99163 16.3237 3.16209 16.7669 3.5406 16.9351C3.91911 17.1034 4.36234 16.9329 4.53057 16.5544L5.9017 13.4695L11.5665 13.4696L12.9376 16.5546C13.1059 16.9331 13.5491 17.1036 13.9276 16.9354C14.3061 16.7671 14.4766 16.3239 14.3084 15.9454L9.41955 4.9454ZM10.8999 11.9696L6.56839 11.9695L8.73417 7.09664L10.8999 11.9696Z"
      fill="#323544"
    />
    <svg:path
      d="M14.2184 19.5L3.24997 19.4996C2.83576 19.4996 2.49999 19.1638 2.5 18.7496C2.50001 18.3354 2.83581 17.9996 3.25003 17.9996L14.2185 18C14.6327 18 14.9685 18.3358 14.9685 18.75C14.9685 19.1642 14.6327 19.5 14.2184 19.5Z"
      fill="#323544"
    />
    <svg:path
      d="M17.1915 14.1918C16.8986 14.4847 16.8986 14.9596 17.1915 15.2525L18.6753 16.7363L17.1915 18.2202C16.8986 18.5131 16.8986 18.9879 17.1915 19.2808C17.4844 19.5737 17.9592 19.5737 18.2521 19.2808L19.736 17.797L21.2197 19.2808C21.5126 19.5737 21.9875 19.5737 22.2804 19.2808C22.5733 18.9879 22.5733 18.513 22.2804 18.2201L20.7966 16.7363L22.2804 15.2525C22.5733 14.9597 22.5733 14.4848 22.2804 14.1919C21.9875 13.899 21.5126 13.899 21.2197 14.1919L19.736 15.6757L18.2521 14.1918C17.9592 13.8989 17.4844 13.8989 17.1915 14.1918Z"
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
export class SiTextFormatRemoveIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
