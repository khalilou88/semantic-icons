import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-smartthings-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>SmartThings</title>
      <path
        d="M11.51 0C8.338 0 5.034.537 2.694 2.694.5 5.174 0 8.464 0 11.525v.942c0 3.165.537 6.499 2.694 8.84C5.188 23.513 8.494 24 11.569 24h.854c3.18 0 6.528-.53 8.883-2.694C23.514 18.811 24 15.5 24 12.423v-.853c0-3.18-.53-6.528-2.694-8.876C18.826.494 15.544 0 12.482 0zM12 3.505c1.244 0 2.256.99 2.256 2.206 0 1.065-.685 1.976-1.715 2.181v1.59c1.48.214 2.528 1.43 2.528 2.934 0 1.654-1.377 3-3.07 3-1.692 0-3.068-1.346-3.068-3 0-.17.017-.335.045-.497l-1.536-.488a2.258 2.258 0 01-1.962 1.12c-.237 0-.471-.037-.698-.11-1.183-.375-1.833-1.622-1.449-2.78a2.246 2.246 0 012.146-1.524c.237 0 .471.036.698.108a2.23 2.23 0 011.313 1.098c.204.391.282.823.232 1.249l1.535.488c.44-.86 1.378-1.453 2.384-1.599V7.892c-1.029-.205-1.896-1.116-1.896-2.181 0-1.217 1.012-2.206 2.257-2.206zm0 .882c-.747 0-1.354.594-1.354 1.324 0 .73.607 1.324 1.354 1.324.746 0 1.354-.594 1.354-1.324 0-.73-.608-1.324-1.354-1.324zm6.522 3.75c.98 0 1.843.613 2.146 1.525.186.56.138 1.158-.135 1.683-.274.526-.74.915-1.314 1.096-.227.073-.461.11-.698.11a2.258 2.258 0 01-1.962-1.12l-.634.201-.278-.838.632-.202a2.21 2.21 0 011.546-2.347c.226-.072.46-.108.697-.108zM5.476 9.02c-.588 0-1.105.368-1.287.915-.23.694.159 1.442.869 1.668.136.043.277.065.419.065.588 0 1.105-.368 1.287-.915a1.29 1.29 0 00-.081-1.01 1.338 1.338 0 00-.788-.658 1.377 1.377 0 00-.42-.065zm13.045 0c-.142 0-.282.021-.419.065a1.32 1.32 0 00-.869 1.668c.182.547.7.915 1.287.915.142 0 .283-.022.42-.065.344-.11.623-.343.787-.659.165-.315.193-.673.082-1.009a1.348 1.348 0 00-1.288-.915zM12 10.474c-1.095 0-1.986.871-1.986 1.942 0 1.07.89 1.941 1.986 1.941 1.094 0 1.985-.87 1.985-1.94 0-1.072-.89-1.943-1.985-1.943zm-2.706 4.831l.73.519-.39.526c.709.757.801 1.925.16 2.787-.423.57-1.106.91-1.827.91-.478 0-.937-.147-1.325-.422a2.177 2.177 0 01-.499-3.082 2.28 2.28 0 012.76-.71zm5.41 0l.392.528a2.285 2.285 0 012.76.71 2.178 2.178 0 01-.499 3.082 2.275 2.275 0 01-1.325.421 2.28 2.28 0 01-1.827-.91 2.172 2.172 0 01.16-2.785l-.39-.527zm-6.734 1.21c-.433 0-.843.205-1.097.547-.44.59-.304 1.42.3 1.849a1.37 1.37 0 001.891-.293c.44-.59.305-1.42-.3-1.85a1.364 1.364 0 00-.794-.252zm8.059 0c-.287 0-.561.088-.795.254a1.307 1.307 0 00-.299 1.849 1.371 1.371 0 001.891.293 1.307 1.307 0 00.3-1.85 1.37 1.37 0 00-1.097-.545Z"
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
export class SvgSmartthingsIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
