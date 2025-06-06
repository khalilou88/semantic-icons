import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sensors-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.54 8.54c.35.35.37.88.1 1.29a4.006 4.006 0 0 0 0 4.34c.27.41.24.95-.11 1.29-.43.43-1.17.4-1.51-.11A5.995 5.995 0 0 1 6 12c0-1.21.36-2.33.97-3.28.36-.54 1.11-.64 1.57-.18zm6.92 6.92c.43.43 1.17.4 1.51-.11a5.982 5.982 0 0 0 0-6.71c-.34-.5-1.08-.54-1.51-.11-.35.35-.37.88-.11 1.29a3.99 3.99 0 0 1 .01 4.35c-.27.41-.24.95.1 1.29zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6.32 8.32c.42.42 1.12.39 1.5-.08C21.18 16.53 22 14.36 22 12s-.82-4.53-2.18-6.24c-.37-.47-1.07-.5-1.5-.08-.36.36-.4.92-.08 1.32 1.1 1.37 1.76 3.11 1.76 5s-.66 3.63-1.76 5c-.32.39-.28.96.08 1.32zM5.68 5.68c-.42-.42-1.12-.39-1.5.08C2.82 7.47 2 9.64 2 12s.82 4.53 2.18 6.24c.37.47 1.07.5 1.5.08.36-.36.4-.92.08-1.32C4.66 15.63 4 13.89 4 12s.66-3.63 1.76-5c.32-.39.28-.96-.08-1.32z"
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
export class SiSensorsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
