import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-googlenearby-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Google Nearby</title>
      <path
        d="M6.5459 12.0003L12.001 6.545l5.4541 5.4552-5.4541 5.454zm16.9763-1.154L13.158.48a1.635 1.635 0 00-2.314 0L.4778 10.8462a1.629 1.629 0 000 2.305L10.848 23.5226a1.629 1.629 0 002.304 0l10.3702-10.3712a1.629 1.629 0 000-2.305zM12 20.7263l-8.7272-8.7281L12 3.27l8.7272 8.7282z"
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
export class SvgGooglenearbyIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
