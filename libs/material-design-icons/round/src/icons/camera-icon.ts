import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-camera-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.81 2.86c.17-.3 0-.7-.35-.74-2.62-.37-5.3.28-7.44 1.86-.19.15-.25.43-.12.65l3.01 5.22c.19.33.67.33.87 0l4.03-6.99zm7.49 5.47c-.98-2.47-2.92-4.46-5.35-5.5-.23-.1-.5 0-.63.22l-3.01 5.21c-.19.32.05.74.44.74h8.08c.35 0 .6-.35.47-.67zm.07 1.67h-6.2c-.38 0-.63.42-.43.75L19 18.14c.17.3.6.35.82.08 1.74-2.18 2.48-5.03 2.05-7.79a.498.498 0 0 0-.5-.43zM4.18 5.79a10.09 10.09 0 0 0-2.05 7.79c.03.24.25.42.5.42h6.2c.38 0 .63-.42.43-.75L5 5.87c-.18-.3-.61-.35-.82-.08zM2.7 15.67c.98 2.47 2.92 4.46 5.35 5.5.23.1.5 0 .63-.22l3.01-5.21a.502.502 0 0 0-.43-.75H3.17c-.35.01-.6.36-.47.68zm7.83 6.22c2.62.37 5.3-.28 7.44-1.86.2-.15.26-.44.13-.66l-3.01-5.22a.506.506 0 0 0-.87 0l-4.04 6.99c-.17.3.01.7.35.75z"
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
export class SiCameraIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
