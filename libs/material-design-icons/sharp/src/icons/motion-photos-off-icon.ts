import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-motion-photos-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 6c-.92 0-1.8.22-2.58.59l7.99 7.99c.37-.78.59-1.66.59-2.58 0-3.31-2.69-6-6-6zM2.81 2.81 1.39 4.22l2.27 2.27A9.91 9.91 0 0 0 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l2.27 2.27 1.41-1.42L2.81 2.81zM12 20c-4.41 0-8-3.59-8-8 0-1.48.41-2.86 1.12-4.06l1.47 1.47C6.22 10.2 6 11.08 6 12c0 3.31 2.69 6 6 6 .92 0 1.8-.22 2.58-.59l1.47 1.47A7.869 7.869 0 0 1 12 20z"
    />
    <svg:path
      d="M12 4c4.41 0 8 3.59 8 8 0 1.48-.41 2.86-1.12 4.05l1.45 1.45A9.782 9.782 0 0 0 22 12c0-5.52-4.48-10-10-10-2.04 0-3.93.61-5.51 1.66l1.45 1.45C9.14 4.41 10.52 4 12 4z"
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
export class SiMotionPhotosOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
