import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-panorama-photosphere-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M23 8.84c-.54-.43-1.23-.81-1.99-1.15C19.4 4.33 15.98 2 12 2 8.02 2 4.6 4.33 2.99 7.68c-.76.35-1.45.72-1.99 1.16v6.33c.54.43 1.23.81 1.99 1.15C4.6 19.67 8.02 22 12 22c3.98 0 7.4-2.33 9.01-5.68.76-.34 1.45-.72 1.99-1.15V8.84zM12 4c2.37 0 4.49 1.04 5.95 2.68C16.17 6.25 14.15 6 12 6c-2.15 0-4.17.25-5.95.68A7.943 7.943 0 0 1 12 4zm0 16c-2.37 0-4.49-1.04-5.95-2.68 1.78.43 3.8.68 5.95.68s4.17-.25 5.95-.68A7.943 7.943 0 0 1 12 20z"
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
export class SiPanoramaPhotosphereIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
