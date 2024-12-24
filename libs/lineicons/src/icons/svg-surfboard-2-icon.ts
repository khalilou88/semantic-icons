import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-surfboard-2-icon',
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
        d="M5.67811 20.5C4.93606 18.5359 4.5 15.9658 4.5 13.1846C4.5 10.2298 4.992 7.51974 5.81564 5.52052C6.22673 4.52267 6.73524 3.6658 7.33827 3.04669C7.94362 2.4252 8.6909 2 9.54883 2C10.4068 2 11.154 2.4252 11.7594 3.04669C12.3624 3.6658 12.8709 4.52267 13.282 5.52052C13.3846 5.76962 13.4821 6.02975 13.5741 6.30001C13.6862 6.1386 13.7995 5.98291 13.9139 5.83324C14.5525 4.9977 15.2481 4.31833 15.9737 3.88658C16.7021 3.45312 17.5172 3.23948 18.3304 3.45738C19.1436 3.67528 19.7427 4.26784 20.1568 5.00745C20.5693 5.74416 20.832 6.68028 20.9673 7.72317C21.2383 9.81273 21.0178 12.4864 20.2732 15.2653C19.7462 17.2322 19.0172 19.0251 18.1805 20.5H20C20.4142 20.5 20.75 20.8358 20.75 21.25C20.75 21.6642 20.4142 22 20 22H4C3.58579 22 3.25 21.6642 3.25 21.25C3.25 20.8358 3.58579 20.5 4 20.5H5.67811ZM7.20255 6.0919C6.47032 7.86925 6 10.3765 6 13.1846C6 16.1187 6.51328 18.7176 7.29738 20.5H10.0845C9.7615 18.3716 9.97137 15.5952 10.744 12.7119C11.2044 10.9934 11.8183 9.41 12.5224 8.05589C12.3462 7.33311 12.1347 6.67344 11.8951 6.0919C11.5283 5.20147 11.1104 4.53024 10.6849 4.09331C10.2616 3.65876 9.87798 3.5 9.54883 3.5C9.21967 3.5 8.83605 3.65876 8.41279 4.09331C7.98721 4.53024 7.5694 5.20147 7.20255 6.0919ZM16.4269 20.5C16.9783 19.6511 17.5037 18.6281 17.9649 17.4735L15.5287 15.2476C15.3487 15.083 15.0998 15.0163 14.8616 15.0688L11.6388 15.7784C11.3772 17.5889 11.3782 19.2222 11.6045 20.5H16.4269ZM13.2221 10.091L15.6216 9.56271C16.3363 9.40534 17.0829 9.60539 17.6231 10.099L19.4374 11.7567C19.6137 10.3224 19.6217 9.01081 19.4797 7.91612C19.3594 6.98844 19.1363 6.25512 18.848 5.7403C18.5614 5.22838 18.2446 4.98731 17.9422 4.90627C17.6397 4.82523 17.2449 4.87563 16.7407 5.17564C16.2336 5.47735 15.6738 6.00087 15.1057 6.7441C14.4354 7.62108 13.7866 8.76083 13.2221 10.091ZM12.592 11.7657C12.449 12.1972 12.3154 12.6426 12.1928 13.1001C12.0956 13.4632 12.0081 13.8229 11.9303 14.1783L14.539 13.6039C15.2537 13.4465 16.0003 13.6466 16.5405 14.1402L18.5126 15.9421C18.6229 15.5954 18.7271 15.2401 18.8243 14.877C18.9469 14.4196 19.0539 13.9672 19.1458 13.5221L16.6114 11.2064C16.4313 11.0418 16.1824 10.9752 15.9442 11.0276L12.592 11.7657Z"
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
export class SvgSurfboard2Icon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
