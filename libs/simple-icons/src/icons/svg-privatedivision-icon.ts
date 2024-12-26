import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-privatedivision-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Private Division</title>
      <path
        d="M12.384.248A.422.422 0 0 0 11.998 0a.427.427 0 0 0-.387.248L6.172 12.002l5.441 11.752a.428.428 0 0 0 .616.18.428.428 0 0 0 .157-.18l5.443-11.752L12.384.248Zm-.386 18.449-3.101-6.695 3.101-6.697 3.1 6.697-3.1 6.695Z"
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
export class SvgPrivatedivisionIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
