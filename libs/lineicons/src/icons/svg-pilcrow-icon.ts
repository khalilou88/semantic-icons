import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-pilcrow-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5833 4.75L10.5835 20C10.5835 20.4142 10.2477 20.75 9.8335 20.75C9.41929 20.75 9.0835 20.4142 9.0835 20L9.0834 10.9722H7.61111C5.47868 10.9722 3.75 9.24355 3.75 7.11111C3.75 4.97868 5.47868 3.25 7.61111 3.25L20.5002 3.25C20.9144 3.25 21.2502 3.58579 21.2502 4C21.2502 4.41421 20.9144 4.75 20.5002 4.75L15.9165 4.75V20C15.9165 20.4142 15.5807 20.75 15.1665 20.75C14.7523 20.75 14.4165 20.4142 14.4165 20V4.75L10.5833 4.75ZM9.08339 9.47222L9.08334 4.75H7.61111C6.30711 4.75 5.25 5.80711 5.25 7.11111C5.25 8.41512 6.30711 9.47222 7.61111 9.47222H9.08339Z"
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
export class SvgPilcrowIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
