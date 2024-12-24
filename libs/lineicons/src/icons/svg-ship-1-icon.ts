import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-ship-1-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.24756 6C7.83756 6 7.49756 6.34 7.49756 6.75V8.39L5.99756 9.07V6.75C5.99756 5.51 7.00756 4.5 8.24756 4.5H8.99756V4.25C8.99756 3.01 10.0076 2 11.2476 2H12.7476C13.9876 2 14.9976 3.01 14.9976 4.25V4.5H15.7476C16.9876 4.5 17.9976 5.51 17.9976 6.75V9.07L16.4976 8.39V6.75C16.4976 6.34 16.1576 6 15.7476 6H8.24756ZM11.2476 3.5C10.8376 3.5 10.4976 3.84 10.4976 4.25V4.5H13.4976V4.25C13.4976 3.84 13.1576 3.5 12.7476 3.5H11.2476Z"
        fill="#323544"
      />
      <path
        d="M5.3776 17.6999C5.7776 17.7199 6.1676 17.8799 6.4676 18.1099C6.6776 18.2699 6.9276 18.4299 7.2076 18.5799C7.1976 18.5599 7.1901 18.5399 7.1826 18.5199C7.1751 18.4999 7.1676 18.4799 7.1576 18.4599L5.5876 13.0699C5.4776 12.7099 5.6676 12.3199 6.0176 12.1699L11.7076 9.73992C11.8976 9.65992 12.1076 9.65992 12.2976 9.73992L17.9876 12.1699C18.3376 12.3199 18.5176 12.6999 18.4176 13.0699L16.8476 18.4599C16.8476 18.4599 16.8176 18.5399 16.7976 18.5799C17.0776 18.4299 17.3276 18.2699 17.5376 18.1099C17.8376 17.8799 18.2276 17.7299 18.6276 17.6999L19.8476 13.4799C20.1676 12.3899 19.6176 11.2299 18.5676 10.7799L12.8776 8.34992C12.3176 8.10992 11.6776 8.10992 11.1076 8.34992L5.4176 10.7799C4.3676 11.2299 3.8176 12.3799 4.1376 13.4799L5.3576 17.6999H5.3776Z"
        fill="#323544"
      />
      <path
        d="M21.5577 20.32L18.8277 19.06C18.5377 18.93 18.1977 18.99 17.9777 19.22C17.9677 19.23 16.7077 20.49 15.2577 20.49C15.0677 20.49 14.8977 20.46 14.7277 20.43C13.5177 20.18 12.5577 19.22 12.5477 19.21C12.4077 19.07 12.2177 18.98 12.0077 18.98C11.8077 18.98 11.6177 19.06 11.4677 19.2C11.4577 19.21 10.4977 20.17 9.28769 20.42C9.22916 20.4265 9.17062 20.4351 9.11175 20.4438C8.98959 20.4618 8.86588 20.48 8.73769 20.48C7.28769 20.48 6.02769 19.22 6.01769 19.21C5.79769 18.98 5.45769 18.92 5.16769 19.05L2.43769 20.31C2.05769 20.48 1.89769 20.93 2.06769 21.3C2.23769 21.68 2.68769 21.84 3.06769 21.67L5.34769 20.62C5.96769 21.13 7.23769 21.98 8.73769 21.98C10.1377 21.98 11.3377 21.23 11.9977 20.72C12.6577 21.23 13.8577 21.98 15.2577 21.98C16.7577 21.98 18.0277 21.12 18.6477 20.62L20.9277 21.67C21.2977 21.84 21.7477 21.67 21.9277 21.3C22.0977 20.92 21.9277 20.48 21.5577 20.31V20.32Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgShip1Icon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
