import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-bell-active-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m10.827 5.465-.435-2.324m.435 2.324a5.338 5.338 0 0 1 6.033 4.333l.331 1.769c.44 2.345 2.383 2.588 2.6 3.761.11.586.22 1.171-.31 1.271l-12.7 2.377c-.529.099-.639-.488-.749-1.074C5.813 16.73 7.538 15.8 7.1 13.455c-.219-1.169.218 1.162-.33-1.769a5.338 5.338 0 0 1 4.058-6.221Zm-7.046 4.41c.143-1.877.822-3.461 2.086-4.856m2.646 13.633a3.472 3.472 0 0 0 6.728-.777l.09-.5-6.818 1.277Z"
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
export class SvgBellActiveIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
