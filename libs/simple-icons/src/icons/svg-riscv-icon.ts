import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-riscv-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>RISC-V</title>
      <path
        d="M6.94945.05132h16.9479v6.2099l-10.42482 14.7424-.52374.73429-5.7888-6.84154c4.10309-.73955 6.2099-3.89648 6.2099-7.37054 0-3.47539-2.10681-7.0534-6.42044-7.4745zM1.47516 13.42121l8.73912 10.52747H0V3.4188h5.47428c2.94506 0 4.42154 1.9989 4.42154 4.10703 0 2.1068-1.47648 4.20967-4.42154 4.20967H1.47516v1.6857zm14.0693 10.52747H24V12.1566l-7.68505 10.73802-.77048 1.05406z"
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
export class SvgRiscvIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
