import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-otto-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Otto</title>
      <path
        d="M20.893 7.95c-1.195 0-2.168.37-2.855 1.132.097-.265.149-.588.156-.968h-4.191c-.914 0-1.437.402-1.796 1.437l.185-1.437H8.157c-.775 0-1.307.37-1.5 1.096-.524-.84-1.457-1.26-2.636-1.26C1.779 7.95.32 9.246.059 12.01l-.033.35c-.228 2.47 1.067 3.69 3.08 3.69 2.243 0 3.702-1.307 3.963-4.072l.033-.348c.059-.634.015-1.185-.114-1.655h1.899l-.545 4.66c-.108.925.392 1.35 1.23 1.35.512 0 .686-.034.882-.066l.675-5.944h2.21l-.544 4.66c-.11.925.392 1.35 1.23 1.35.511 0 .685-.034.881-.066l.675-5.944h1.089c.376 0 .68-.087.915-.26-.342.604-.566 1.366-.654 2.296l-.032.348c-.229 2.471 1.066 3.69 3.08 3.69 2.243 0 3.701-1.306 3.962-4.07l.033-.349c.229-2.46-1.067-3.68-3.08-3.68zM4.86 11.477l-.022.262c-.152 1.872-.762 2.449-1.513 2.449-.675 0-1.153-.457-1.055-1.676l.021-.272c.153-1.862.762-2.45 1.513-2.45.664 0 1.154.468 1.056 1.687zm16.873 0-.022.262c-.153 1.872-.762 2.449-1.513 2.449-.675 0-1.154-.457-1.056-1.676l.022-.272c.152-1.862.762-2.45 1.513-2.45.664 0 1.154.468 1.056 1.687z"
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
export class SvgOttoIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
