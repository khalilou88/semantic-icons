import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-smart-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>smart</title>
      <path
        d="M10.85.846A11.138 11.138 0 0 0 0 11.979v.04a11.136 11.136 0 0 0 10.844 11.135h.283a10.983 10.983 0 0 0 4.041-.758.395.395 0 0 0 .256-.369v-5.564a.21.21 0 0 0-.274-.195c-1.202.489-2.215.957-3.96.957a5.222 5.222 0 0 1-5.22-5.22 5.22 5.22 0 0 1 5.22-5.22c1.745 0 2.758.467 3.96.955a.21.21 0 0 0 .274-.193V1.979a.395.395 0 0 0-.256-.37 10.983 10.983 0 0 0-4.037-.763Zm5.863 1.82v18.67a.238.238 0 0 0 .377.19c3.413-2.122 6.91-8.16 6.91-9.52 0-1.36-3.497-7.396-6.91-9.522a.238.238 0 0 0-.377.182Z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSmartIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}