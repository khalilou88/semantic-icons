import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-perm-camera-mic-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 5h-3.17l-1.24-1.35A1.99 1.99 0 0 0 14.12 3H9.88c-.56 0-1.1.24-1.48.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.45-.42-4.41-2.32-4.89-4.75-.12-.61.38-1.16.99-1.16.49 0 .88.35.98.83C8.47 15.64 10.07 17 12 17s3.53-1.36 3.91-3.17c.1-.48.5-.83.98-.83.61 0 1.11.55.99 1.16a6.02 6.02 0 0 1-4.89 4.75V21h7c1.1 0 2-.9 2-2V7C22 5.9 21.1 5 20 5zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"
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
export class SiPermCameraMicIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
