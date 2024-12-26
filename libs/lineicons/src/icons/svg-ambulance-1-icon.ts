import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-ambulance-1-icon',
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
        d="M8.87477 6.16956C8.46056 6.16956 8.12477 6.50535 8.12477 6.91956V8.74991H6.29442C5.8802 8.74991 5.54442 9.0857 5.54442 9.49991C5.54442 9.91413 5.8802 10.2499 6.29442 10.2499H8.12477V12.0807C8.12477 12.4949 8.46056 12.8307 8.87477 12.8307C9.28898 12.8307 9.62477 12.4949 9.62477 12.0807V10.2499H11.4555C11.8697 10.2499 12.2055 9.91413 12.2055 9.49991C12.2055 9.0857 11.8697 8.74991 11.4555 8.74991H9.62477V6.91956C9.62477 6.50535 9.28898 6.16956 8.87477 6.16956Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 5.5C2 4.25736 3.00736 3.25 4.25 3.25H13.5C14.7426 3.25 15.75 4.25736 15.75 5.5V6.39003H17.2037C17.9506 6.39003 18.6489 6.76072 19.0674 7.37945L21.6137 11.1441C21.8655 11.5163 22 11.9553 22 12.4047V16.75C22.4142 16.75 22.75 17.0858 22.75 17.5C22.75 17.9142 22.4142 18.25 22 18.25H20.078C19.8129 19.6729 18.5647 20.75 17.065 20.75C15.5653 20.75 14.3171 19.6729 14.052 18.25H10.328C10.0629 19.6729 8.81473 20.75 7.315 20.75C5.81527 20.75 4.56712 19.6729 4.30197 18.25H4.25C3.00736 18.25 2 17.2426 2 16V5.5ZM4.39523 16.75C4.79055 15.5145 5.94831 14.62 7.315 14.62C8.68169 14.62 9.83945 15.5145 10.2348 16.75H14.1452C14.1757 16.6547 14.2107 16.5615 14.25 16.4706V5.5C14.25 5.08579 13.9142 4.75 13.5 4.75H4.25C3.83579 4.75 3.5 5.08579 3.5 5.5V16C3.5 16.4142 3.83579 16.75 4.25 16.75H4.39523ZM15.75 14.9156C16.1485 14.7261 16.5944 14.62 17.065 14.62C18.4317 14.62 19.5895 15.5145 19.9848 16.75H20.5V12.695L15.75 12.695V14.9156ZM15.75 11.195L19.8373 11.195L17.8249 8.21983C17.6854 8.01359 17.4527 7.89003 17.2037 7.89003H15.75V11.195ZM17.065 16.12C16.2007 16.12 15.5 16.8207 15.5 17.685C15.5 18.5493 16.2007 19.25 17.065 19.25C17.9293 19.25 18.63 18.5493 18.63 17.685C18.63 16.8207 17.9293 16.12 17.065 16.12ZM7.315 16.12C6.45067 16.12 5.75 16.8207 5.75 17.685C5.75 18.5493 6.45067 19.25 7.315 19.25C8.17933 19.25 8.88 18.5493 8.88 17.685C8.88 16.8207 8.17933 16.12 7.315 16.12Z"
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
export class SvgAmbulance1Icon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
