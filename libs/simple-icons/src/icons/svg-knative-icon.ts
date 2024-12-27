import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-knative-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Knative</title>
      <path
        d="m10.14 2.358 4.714 2.27-.915 1.584a.268.268 0 0 0-.032.182l.607 3.441a.263.263 0 0 0 .093.16l2.676 2.245c.048.041.11.064.174.064h1.878l.507 2.22a.492.492 0 0 1-.095.415l-5.237 6.567a.491.491 0 0 1-.383.184h-8.4a.491.491 0 0 1-.383-.184L.107 14.939a.492.492 0 0 1-.095-.415l1.869-8.189a.494.494 0 0 1 .266-.333l7.567-3.644a.49.49 0 0 1 .426 0ZM7.244 16.626h1.667v-2.429l.64-.784 1.822 3.213h1.965l-2.594-4.273 2.462-3.169h-2.065l-1.689 2.473c-.166.265-.342.53-.508.817h-.033v-3.29H7.244v7.442ZM19.281 2.352l2.975 1.083c.054.02.099.058.128.108l1.583 2.742c.029.05.039.108.029.165l-.55 3.118a.243.243 0 0 1-.083.145l-2.426 2.035a.245.245 0 0 1-.157.058h-3.166a.246.246 0 0 1-.158-.058l-2.425-2.035a.24.24 0 0 1-.084-.145l-.55-3.118a.244.244 0 0 1 .029-.165l1.583-2.742a.245.245 0 0 1 .129-.108l2.975-1.083a.243.243 0 0 1 .168 0Zm-.71 3.404c-.032-.092-.098-.137-.197-.137h-.487V8.57h.79V6.449c.088-.086.18-.153.278-.2a.694.694 0 0 1 .312-.072c.149 0 .261.045.338.136.076.091.114.218.114.382V8.57h.787V6.695c0-.164-.021-.315-.064-.452a.988.988 0 0 0-.192-.355.875.875 0 0 0-.313-.232 1.208 1.208 0 0 0-.697-.054 1.176 1.176 0 0 0-.436.203 1.956 1.956 0 0 0-.184.157l-.049-.206Z"
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
export class SvgKnativeIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
