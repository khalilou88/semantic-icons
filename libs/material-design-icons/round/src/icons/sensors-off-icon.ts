import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sensors-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.68 18.32c-.42.42-1.12.39-1.5-.08A9.998 9.998 0 0 1 2 12c0-2.04.61-3.93 1.66-5.51L2.1 4.93a.996.996 0 1 1 1.41-1.41l16.97 16.97a.996.996 0 1 1-1.41 1.41L8.14 10.96c-.09.33-.14.68-.14 1.04 0 .8.24 1.55.64 2.17.27.41.24.94-.1 1.29-.43.43-1.17.4-1.51-.11A5.926 5.926 0 0 1 6 12c0-.93.21-1.8.58-2.59L5.11 7.94A7.897 7.897 0 0 0 4 12c0 1.89.66 3.63 1.76 5 .32.39.28.96-.08 1.32zm9.78-9.78c-.35.35-.37.88-.11 1.29a3.931 3.931 0 0 1 .51 3.21l1.55 1.55a5.982 5.982 0 0 0-.44-5.95c-.34-.5-1.07-.54-1.51-.1zm2.86-2.86c-.36.36-.4.92-.08 1.32A7.963 7.963 0 0 1 20 12c0 1.48-.4 2.87-1.11 4.06l1.45 1.45A9.91 9.91 0 0 0 22 12c0-2.36-.82-4.53-2.18-6.24-.38-.47-1.08-.5-1.5-.08z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSensorsOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
