import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-dictionarydotcom-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Dictionary.com</title>
      <path
        d="M11.894.087 1.043 0a.3.3 0 0 0-.305.293V18.97a.331.331 0 0 0 .166.28l8.13 4.713a.268.268 0 0 0 .364-.092.27.27 0 0 0 .038-.138V6.275a.33.33 0 0 0-.176-.292L4.944 3.625a.173.173 0 0 1-.084-.21.173.173 0 0 1 .197-.112l7.804 1.333a.31.31 0 0 1 .252.302v15.717a.307.307 0 0 0 .309.308h.035c5.781-.645 9.72-4.693 9.804-10.308.078-6.28-4.595-10.48-11.367-10.568Z"
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
export class SvgDictionarydotcomIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
