import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-flip-camera-android-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M9 12c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z" />
    <svg:path
      d="M8 9c0-.55-.45-1-1-1H5.09C6.47 5.61 9.05 4 12 4c3.49 0 6.45 2.24 7.54 5.36.14.39.53.64.94.64.68 0 1.18-.67.96-1.31C20.07 4.79 16.36 2 12 2 8.73 2 5.82 3.58 4 6.01V5c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1zm8 6c0 .55.45 1 1 1h1.91c-1.38 2.39-3.96 4-6.91 4-3.49 0-6.45-2.24-7.54-5.36a.998.998 0 0 0-.94-.64c-.68 0-1.18.67-.96 1.31C3.93 19.21 7.64 22 12 22c3.27 0 6.18-1.58 8-4.01V19c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1z"
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
export class SiFlipCameraAndroidIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
