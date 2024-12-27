import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-arrow-angular-top-left-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.7817 5.99247C5.91862 5.84531 6.11399 5.75323 6.33088 5.75315L15.3263 5.75C15.7406 5.74985 16.0765 6.08545 16.0767 6.49958C16.0768 6.9137 15.7411 7.24954 15.3268 7.24968L8.13588 7.2522L18.8551 17.9714C19.148 18.2643 19.148 18.7392 18.8551 19.0321C18.5622 19.325 18.0873 19.325 17.7944 19.0321L7.08072 8.31837L7.07844 15.4945C7.07831 15.9086 6.74235 16.2442 6.32805 16.2441C5.91374 16.244 5.57799 15.9081 5.57813 15.494L5.58096 6.56459C5.565 6.3609 5.63191 6.15193 5.7817 5.99247Z"
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
export class SvgArrowAngularTopLeftIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
