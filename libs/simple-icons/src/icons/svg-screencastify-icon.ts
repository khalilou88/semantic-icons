import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-screencastify-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Screencastify</title>
      <path
        d="M7.898 2.347c-.472.008-.914.38-.914.891v4.278H1.1c-.541 0-1.1.437-1.1.978v7.02c0 .54.559.907 1.1.907h5.884V7.533h6.408c.542 0 .926.437.926.979v1.623l3.667-2.095v7.927l-3.667-2.095v1.676c0 .541-.384.908-.926.908H6.984v4.313c0 .68.786 1.1 1.38.768l9.638-5.535 5.553-3.195c.593-.402.593-1.257 0-1.59l-5.553-3.194L8.364 2.47a.886.886 0 00-.466-.123z"
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
export class SvgScreencastifyIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
