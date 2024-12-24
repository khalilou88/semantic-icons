import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-awselasticloadbalancing-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>AWS Elastic Load Balancing</title>
      <path
        d="M7.2 18.24C3.76 18.24.96 15.44.96 12s2.8-6.24 6.24-6.24 6.24 2.8 6.24 6.24-2.8 6.24-6.24 6.24m14.4 2.88c0 1.059-.861 1.92-1.92 1.92a1.92 1.92 0 0 1-1.92-1.92c0-1.059.861-1.92 1.92-1.92s1.92.861 1.92 1.92M19.68.96c1.059 0 1.92.861 1.92 1.92s-.861 1.92-1.92 1.92a1.92 1.92 0 0 1-1.92-1.92c0-1.059.861-1.92 1.92-1.92m1.44 9.12c1.059 0 1.92.861 1.92 1.92s-.861 1.92-1.92 1.92A1.92 1.92 0 0 1 19.2 12c0-1.059.861-1.92 1.92-1.92m-6.744 2.4h3.907a2.88 2.88 0 0 0 2.837 2.4A2.883 2.883 0 0 0 24 12a2.883 2.883 0 0 0-2.88-2.88 2.88 2.88 0 0 0-2.837 2.4h-3.907a7.1 7.1 0 0 0-.661-2.566l4.26-3.759a2.86 2.86 0 0 0 1.705.565 2.883 2.883 0 0 0 2.88-2.88A2.883 2.883 0 0 0 19.68 0a2.883 2.883 0 0 0-2.88 2.88c0 .603.187 1.162.504 1.625L13.24 8.092A7.2 7.2 0 0 0 7.2 4.8C3.23 4.8 0 8.03 0 12s3.23 7.2 7.2 7.2a7.2 7.2 0 0 0 6.039-3.292l4.065 3.587a2.86 2.86 0 0 0-.504 1.625A2.883 2.883 0 0 0 19.68 24a2.883 2.883 0 0 0 2.88-2.88 2.883 2.883 0 0 0-2.88-2.88 2.86 2.86 0 0 0-1.706.565l-4.26-3.759c.371-.789.601-1.654.662-2.566"
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
export class SvgAwselasticloadbalancingIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
