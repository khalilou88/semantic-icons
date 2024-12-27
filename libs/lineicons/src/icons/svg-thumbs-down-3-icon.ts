import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-thumbs-down-3-icon',
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
        d="M13.6387 17.1293C14.0626 17.2422 14.5675 17.3576 15.1118 17.4431C15.8728 17.5625 16.7358 17.6274 17.5749 17.5323C18.4122 17.4374 19.2743 17.1775 19.9779 16.604C21.7704 15.143 22.2678 12.9032 21.8717 10.8053C21.4767 8.71322 20.1839 6.66221 18.2456 5.43209C17.3131 4.84027 16.0867 4.57891 14.8561 4.48251C13.6097 4.38486 12.2736 4.45073 11.0594 4.57703C9.84188 4.70368 8.72718 4.89326 7.91793 5.05077C7.51273 5.12964 7.18269 5.20075 6.95293 5.25239C6.83803 5.27821 6.74811 5.29919 6.68633 5.31386L6.68024 5.31532H4.25C3.00736 5.31532 2 6.32268 2 7.56532V14.5227C2 15.7653 3.00736 16.7727 4.25 16.7727H6.40881L9.91159 21.1551C10.3386 21.6893 10.9853 22.0003 11.6692 22.0003H11.9247C13.3676 22.0003 14.4376 20.6613 14.1192 19.2539L13.6387 17.1293ZM11.6692 20.5003C11.4412 20.5003 11.2256 20.3966 11.0833 20.2186L7.51948 15.7598V6.66355C7.70855 6.62273 7.9395 6.57472 8.20452 6.52314C8.98435 6.37135 10.0534 6.18977 11.2146 6.06898C12.3791 5.94785 13.6166 5.88999 14.739 5.97793C15.8773 6.0671 16.8149 6.30062 17.4419 6.69856C19.0101 7.69382 20.0753 9.37615 20.3978 11.0837C20.7191 12.7855 20.2934 14.4117 19.0302 15.4413C18.6223 15.7738 18.0681 15.9668 17.4061 16.0418C16.7459 16.1166 16.0267 16.0683 15.3444 15.9612C14.6656 15.8547 14.0477 15.694 13.5981 15.5591C13.3741 15.4919 13.1939 15.4317 13.0712 15.3889C13.0099 15.3675 12.9631 15.3505 12.9325 15.3392L12.899 15.3266L12.8918 15.3239C12.6334 15.2236 12.3398 15.2736 12.1298 15.4545C11.9198 15.6355 11.8267 15.9177 11.8879 16.1881L12.6562 19.5848C12.7623 20.0539 12.4057 20.5003 11.9247 20.5003H11.6692ZM6.01948 6.81532V15.2727H4.25C3.83579 15.2727 3.5 14.9369 3.5 14.5227V7.56532C3.5 7.15111 3.83579 6.81532 4.25 6.81532H6.01948Z"
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
export class SvgThumbsDown3Icon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
