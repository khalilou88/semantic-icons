import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-stackpath-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>StackPath</title>
      <path
        d="M3.721 7.34c-1.01 0-1.84.23-2.5.7-.66.46-.99 1.08-.99 1.84 0 .78.276 1.38.83 1.79.55.42 1.4.8 2.54 1.16.55.2.93.38 1.14.56.22.17.32.42.32.74 0 .28-.1.51-.32.68-.21.19-.54.27-.97.27-.57 0-1-.12-1.27-.34-.3-.24-.44-.6-.44-1.12H.014l-.013.04c-.02.97.346 1.71 1.1 2.23.75.52 1.64.77 2.67.77 1.02 0 1.84-.22 2.46-.66.62-.46.94-1.09.94-1.88 0-.79-.26-1.4-.78-1.85-.53-.45-1.3-.83-2.33-1.13-.67-.25-1.12-.45-1.37-.61-.24-.16-.36-.37-.36-.63 0-.28.12-.51.36-.69.24-.21.57-.29 1-.29.43 0 .77.12 1.01.34.25.24.37.52.37.88h2.04l.01-.03c.03-.81-.29-1.48-.93-2-.64-.52-1.46-.77-2.47-.77m4.78.06v9.18h2.15v-3.15h1.3c1.09 0 1.95-.27 2.59-.83.64-.55.96-1.28.96-2.18 0-.92-.32-1.63-.96-2.19-.64-.56-1.5-.83-2.59-.83H8.5m9.609 0l-3.18 9.19h1.99l3.26-9.19m1.75 0l-3.18 9.19h1.99L24 7.4M10.65 9.04h1.3c.46 0 .82.13 1.05.39.25.26.37.57.37 1 0 .4-.12.73-.37.98-.23.26-.59.38-1.05.38h-1.3z"
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
export class SvgStackpathIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
