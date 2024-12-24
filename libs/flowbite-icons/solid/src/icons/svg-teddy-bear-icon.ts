import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-teddy-bear-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M10.451 3.244C9.911 2.514 9.052 2 8.038 2 6.378 2 5 3.326 5 5c0 1.315.88 2.36 2.004 2.787a5.082 5.082 0 0 0 .177 1.55L6.08 9.65a2.868 2.868 0 0 0-.802 5.145A3.5 3.5 0 1 0 10.663 19h2.674a3.5 3.5 0 1 0 5.11-4.409 2.865 2.865 0 0 0-.954-4.953l-.696-.223a5.002 5.002 0 0 0 .2-1.588l-.001-.031C18.128 7.367 19 6.311 19 5c0-1.684-1.397-3-3.059-3-1.005 0-1.841.554-2.384 1.247A4.996 4.996 0 0 0 12 3c-.54 0-1.061.086-1.549.244ZM8.685 4.257c-.49.435-.895.964-1.184 1.56C7.193 5.624 7 5.304 7 5c0-.535.447-1 1.038-1a.99.99 0 0 1 .647.257ZM17 5c0 .31-.19.63-.497.824a5.017 5.017 0 0 0-1.174-1.555c.197-.169.423-.269.612-.269C16.553 4 17 4.475 17 5Zm-2 12.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm-9 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm5.043-10.012a.5.5 0 0 0-1 0v.01a.5.5 0 0 0 1 0v-.01Zm3.023.01a.5.5 0 0 0-1 0v.01a.5.5 0 1 0 1 0v-.01ZM13 9.052a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0v-.01Z"
        clip-rule="evenodd"
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
export class SvgTeddyBearIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
