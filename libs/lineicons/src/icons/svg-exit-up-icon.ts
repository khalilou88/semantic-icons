import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-exit-up-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0781 4C12.301 4 12.5012 4.09723 12.6386 4.2516L16.6083 8.21878C16.9013 8.51158 16.9014 8.98646 16.6086 9.27944C16.3158 9.57243 15.8409 9.57258 15.548 9.27978L12.8281 6.56167L12.8281 12.5C12.8281 12.9142 12.4923 13.25 12.0781 13.25C11.6639 13.25 11.3281 12.9142 11.3281 12.5L11.3281 6.56185L8.60827 9.2798C8.31527 9.57259 7.8404 9.57242 7.54761 9.27943C7.25482 8.98643 7.25498 8.51156 7.54798 8.21877L11.5157 4.25385C11.6531 4.09818 11.8541 4 12.0781 4Z"
        fill="#323544"
      />
      <path
        d="M22.0781 12C22.0781 10.7574 21.0708 9.75 19.8281 9.75H17.95C17.8691 9.87082 17.7753 9.98555 17.6686 10.0922L16.5101 11.25L19.8281 11.25C20.2423 11.25 20.5781 11.5858 20.5781 12V18C20.5781 18.4142 20.2423 18.75 19.8281 18.75L4.32812 18.75C3.91391 18.75 3.57812 18.4142 3.57812 18L3.57812 12C3.57812 11.5858 3.91391 11.25 4.32812 11.25L7.64624 11.25L6.48769 10.0923C6.38093 9.98558 6.28714 9.87084 6.2063 9.75L4.32812 9.75C3.08549 9.75 2.07812 10.7574 2.07812 12V18C2.07812 19.2426 3.08548 20.25 4.32812 20.25H19.8281C21.0708 20.25 22.0781 19.2426 22.0781 18V12Z"
        fill="#323544"
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
export class SvgExitUpIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
