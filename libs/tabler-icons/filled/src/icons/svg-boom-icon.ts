import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-boom-icon',
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-boom"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M7.514 3.836c.151 -.909 1.346 -1.147 1.834 -.366c2.294 3.67 4.275 4.048 5.758 1.083c.471 -.944 1.894 -.608 1.894 .447c0 2.448 1.552 4 4 4c.89 0 1.337 1.077 .707 1.707c-1.61 1.61 -1.61 2.975 0 4.581c.63 .63 .185 1.707 -.706 1.708c-2.448 .003 -3.001 .556 -3.001 3.004c0 .961 -1.223 1.369 -1.8 .6c-2.325 -3.1 -5.494 -2.856 -7.368 -.045c-.503 .754 -1.67 .504 -1.818 -.39c-.365 -2.188 -1.04 -2.656 -4.178 -3.179a1 1 0 0 1 -.543 -1.693c1.618 -1.618 1.618 -3.027 -.053 -4.981l-.009 -.013l-.013 -.014l-.044 -.062l-.01 -.011l-.006 -.013l-.038 -.066l-.017 -.028l-.001 -.004l-.027 -.066l-.019 -.041a1 1 0 0 1 -.051 -.233l-.002 -.045l-.003 -.068a1 1 0 0 1 .06 -.328l.009 -.023l.023 -.049l.011 -.029l.009 -.015l.007 -.016l.019 -.029l.02 -.035l.012 -.017l.013 -.022l.027 -.034l.011 -.016l.018 -.02l.02 -.025l.021 -.02l.015 -.017l.035 -.032l.02 -.019l.009 -.007l.018 -.015l.055 -.039l.018 -.015l.008 -.004l.01 -.007l.061 -.034l.028 -.016l.004 -.002l.063 -.026l.044 -.019a1 1 0 0 1 .115 -.032l.004 -.002l.267 -.063c2.39 -.613 3.934 -2.19 4.411 -4.523z"
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
export class SvgBoomIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
