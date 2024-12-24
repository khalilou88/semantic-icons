import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-mintlify-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Mintlify</title>
      <path
        d="M15.158.002a8.807 8.807 0 0 0-6.249 2.59l-.062.063h-.003L2.655 8.844a.605.605 0 0 0-.062.058 8.838 8.838 0 0 0-.83 11.55l6.251-6.249.065-.063a8.778 8.778 0 0 1-1.758-5.385 8.784 8.784 0 0 1 .283-2.151 8.993 8.993 0 0 1 2.151-.286 8.802 8.802 0 0 1 5.386 1.76 8.81 8.81 0 0 1 3.032 4.11 8.879 8.879 0 0 1 .225 5.21 8.784 8.784 0 0 0-.341.082 8.846 8.846 0 0 1-4.868-.303 8.679 8.679 0 0 1-2.323-1.25l-.064.065L3.55 22.24a8.85 8.85 0 0 0 11.548-.83l.06-.062 6.19-6.187a8.801 8.801 0 0 1-.367.337c.125-.11.247-.224.366-.341l.063-.058A8.817 8.817 0 0 0 24 8.844V.002ZM8.38 3.17a8.73 8.73 0 0 1 0 0Zm-.325.413Zm-.328.475Zm-.31.518Zm-.235.455Zm-.283.66zm-.156.447Zm14.147 9.44zm-.43.343zm-1.005.65zm-.533.274zm-.475.207z"
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
export class SvgMintlifyIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
