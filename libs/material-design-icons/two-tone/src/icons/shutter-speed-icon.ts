import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-shutter-speed-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 6c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 1c.46 0 .9.06 1.33.15l-2.72 4.7-2.32-3.56C9.31 7.49 10.6 7 12 7zm-6 6c0-1.54.59-2.95 1.55-4.01L10.81 14H6.09c-.05-.33-.09-.66-.09-1zm.35 2h5.33l-2.03 3.5.11.06A5.992 5.992 0 0 1 6.35 15zM12 19c-.48 0-.94-.06-1.39-.17l2.85-4.92 2.11 3.9A5.98 5.98 0 0 1 12 19zm6-6c0 1.6-.63 3.06-1.66 4.13L13.57 12h4.34c.05.33.09.66.09 1zm-5.74-2 2.05-3.54c1.56.65 2.77 1.94 3.34 3.54h-5.39z"
      opacity=".3"
    />
    <svg:path
      d="M7.55 8.99A5.965 5.965 0 0 0 6 13c0 .34.04.67.09 1h4.72L7.55 8.99zm6.76-1.53L12.26 11h5.39a6.012 6.012 0 0 0-3.34-3.54zm-.98-.31C12.9 7.06 12.46 7 12 7c-1.4 0-2.69.49-3.71 1.29l2.32 3.56 2.72-4.7zM11.68 15H6.35a5.992 5.992 0 0 0 3.41 3.56l-.11-.06 2.03-3.5zm7.35-7.61 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zM9 1h6v2H9zm7.34 16.13A5.94 5.94 0 0 0 18 13c0-.34-.04-.67-.09-1h-4.34l2.77 5.13zm-5.73 1.7c.45.11.91.17 1.39.17 1.34 0 2.57-.45 3.57-1.19l-2.11-3.9-2.85 4.92z"
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
export class SiShutterSpeedIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
