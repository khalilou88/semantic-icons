import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-auto-fix-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m20 7 .94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-5.83 1.42 1.41 1.41-1.46 1.46 1.42 1.42 2.87-2.88-4.24-4.24-2.88 2.87 1.42 1.42zM1.39 4.22l7.07 7.07-6.87 6.88 4.24 4.24 6.88-6.87 7.07 7.07 1.41-1.42L2.81 2.81z"
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
export class SiAutoFixOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
