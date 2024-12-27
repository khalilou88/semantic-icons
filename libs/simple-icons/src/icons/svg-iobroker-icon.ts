import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-iobroker-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>ioBroker</title>
      <path
        d="M12 0c-.61 0-1.201.044-1.787.133v3.285a8.943 8.943 0 013.574.004V.139A11.83 11.83 0 0012 0zM9.38.295C4.084 1.5.13 6.283.13 12 .129 18.628 5.44 24 12 24s11.871-5.372 11.871-12c0-5.717-3.953-10.499-9.246-11.705v3.34c3.575 1.113 6.18 4.44 6.18 8.365 0 4.83-3.949 8.76-8.8 8.76-4.85 0-8.804-3.93-8.804-8.76 0-3.924 2.605-7.247 6.18-8.365V.295zM12 4.137c-.616 0-1.212.068-1.783.2V19.53A7.887 7.887 0 0012 19.73c.616 0 1.211-.068 1.787-.2V4.343A7.65 7.65 0 0012 4.137Z"
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
export class SvgIobrokerIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
