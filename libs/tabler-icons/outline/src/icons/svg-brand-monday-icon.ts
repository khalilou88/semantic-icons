import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-brand-monday-icon',
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-monday"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.5 15.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
      <path
        d="M9.5 7a1.5 1.5 0 0 1 1.339 2.177l-4.034 7.074c-.264 .447 -.75 .749 -1.305 .749a1.5 1.5 0 0 1 -1.271 -2.297l3.906 -6.827a1.5 1.5 0 0 1 1.365 -.876z"
      />
      <path
        d="M16.5 7a1.5 1.5 0 0 1 1.339 2.177l-4.034 7.074c-.264 .447 -.75 .749 -1.305 .749a1.5 1.5 0 0 1 -1.271 -2.297l3.906 -6.827a1.5 1.5 0 0 1 1.365 -.876z"
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
export class SvgBrandMondayIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
