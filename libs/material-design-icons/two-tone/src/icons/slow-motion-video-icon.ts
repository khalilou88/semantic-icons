import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-slow-motion-video-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m4.26 18.32 1.43-1.43A7.868 7.868 0 0 1 4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32zM7.1 5.69A7.941 7.941 0 0 1 11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69zM2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9L4.26 5.68A9.949 9.949 0 0 0 2.05 11zm11-8.95v2.02C16.97 4.59 20 7.95 20 12s-3.03 7.41-6.95 7.93v2.02C18.08 21.42 22 17.16 22 12c0-5.16-3.92-9.42-8.95-9.95zM16 12l-2.95-2.21L10 7.5v9l3.05-2.29zM5.68 19.74A9.981 9.981 0 0 0 11 21.95v-2.02a7.941 7.941 0 0 1-3.9-1.62l-1.42 1.43z"
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
export class SiSlowMotionVideoIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
