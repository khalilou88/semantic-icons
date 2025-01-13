import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-scroll-torah-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M96 480L96 32C96 14.3 74.5 0 48 0S0 14.3 0 32L0 480c0 17.7 21.5 32 48 32s48-14.3 48-32zM512 32L128 32l0 448 384 0 0-448zM592 0c-26.5 0-48 14.3-48 32l0 448c0 17.7 21.5 32 48 32s48-14.3 48-32l0-448c0-17.7-21.5-32-48-32zM196 313.7c0-3.2 .9-6.4 2.5-9.2L226.7 256l-28.3-48.5c-1.6-2.8-2.5-6-2.5-9.2c0-10.1 8.2-18.3 18.3-18.3l56.7 0 31.4-53.9c3.6-6.3 10.3-10.1 17.6-10.1s13.9 3.8 17.6 10.1L369 180l56.7 0c10.1 0 18.3 8.2 18.3 18.3c0 3.2-.9 6.4-2.5 9.2L413.3 256l28.3 48.5c1.6 2.8 2.5 6 2.5 9.2c0 10.1-8.2 18.3-18.3 18.3L369 332l-31.4 53.9c-3.6 6.3-10.3 10.1-17.6 10.1s-13.9-3.8-17.6-10.1L271 332l-56.7 0c-10.1 0-18.3-8.2-18.3-18.3zm124 54.7L341.2 332l-42.4 0L320 368.4zM254.5 256l30.3 52 70.4 0 30.3-52-30.3-52-70.4 0-30.3 52zm144.9 23.8L383 308l32.8 0-16.4-28.2zM415.8 204L383 204l16.4 28.2L415.8 204zM320 143.6L298.8 180l42.4 0L320 143.6zM224.2 204l16.4 28.2L257 204l-32.8 0zM257 308l-16.4-28.2L224.2 308l32.8 0z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiScrollTorahIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 512');
}
