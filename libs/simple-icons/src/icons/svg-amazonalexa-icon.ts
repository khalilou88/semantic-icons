import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-amazonalexa-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Amazon Alexa</title>
      <path
        d="M12 0C5.37 0 0 5.37 0 12C0 18.09 4.53 23.11 10.4 23.9V21.5A1.59 1.59 0 0 0 9.32 19.97A8.41 8.41 0 0 1 3.6 11.8A8.37 8.37 0 0 1 12.09 3.6A8.4 8.4 0 0 1 20.4 12.31L20.39 12.38A8.68 8.68 0 0 1 20.36 12.76C20.36 12.83 20.35 12.9 20.34 12.96C20.34 13.04 20.33 13.12 20.32 13.19L20.3 13.29C19.27 20.07 10.45 23.87 10.4 23.9C10.92 23.97 11.46 24 12 24C18.63 24 24 18.63 24 12S18.63 0 12 0Z"
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
export class SvgAmazonalexaIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
