import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-beach-access-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.6 7.6c-.47 2.34.03 4.78 1.39 6.83l5.45-5.45a9.126 9.126 0 0 0-5.08-1.56c-.6 0-1.19.06-1.76.18zM13.12 5c-.93 0-1.82.16-2.67.46 1.91.19 3.79.89 5.44 2.07l1.39-1.39A8.126 8.126 0 0 0 13.12 5zM5 13.12c0 1.49.4 2.91 1.14 4.15l1.39-1.39a11.247 11.247 0 0 1-2.07-5.44c-.3.86-.46 1.76-.46 2.68z"
      opacity=".3"
    />
    <svg:path
      d="m13.126 14.56 1.428-1.428 6.442 6.442-1.43 1.428zM13.12 3c-2.58 0-5.16.98-7.14 2.95l-.01.01c-3.95 3.95-3.95 10.36 0 14.31l14.3-14.31A10.086 10.086 0 0 0 13.12 3zM6.14 17.27a8.063 8.063 0 0 1-.68-6.82c.19 1.91.89 3.79 2.07 5.44l-1.39 1.38zm2.84-2.84C7.63 12.38 7.12 9.93 7.6 7.6c.58-.12 1.16-.18 1.75-.18 1.8 0 3.55.55 5.08 1.56l-5.45 5.45zm1.47-8.97a8.063 8.063 0 0 1 6.82.68l-1.39 1.39a11.25 11.25 0 0 0-5.43-2.07z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBeachAccessIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
