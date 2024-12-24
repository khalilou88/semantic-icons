import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-dtube-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>DTube</title>
      <path
        d="M0 1.6416v20.7168h8.5156c1.3133 0 2.4886-.1588 3.5371-.4766 1.038-.3177 1.9716-.7833 2.7871-1.4082 1.1545-.8896 2.0431-2.0456 2.668-3.4648.6143-1.4192.9316-3.0486.9316-4.8809-.0105-1.578-.243-3.0203-.709-4.3125-.466-1.2921-1.1116-2.3919-1.959-3.3027-.8366-.9109-1.8536-1.6108-3.0292-2.1191-1.1757-.4979-2.4784-.752-3.9082-.752zm5.2012 5.709l8.039 4.6601-8.039 4.6485zm15.9922 9.162c-1.4934 0-2.711 1.2177-2.711 2.711 0 1.4934 1.2176 2.711 2.711 2.711h.0957c1.4933 0 2.7109-1.2176 2.7109-2.711 0-1.4933-1.2176-2.711-2.711-2.711z"
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
export class SvgDtubeIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
