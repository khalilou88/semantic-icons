import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-photo-camera-back-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 5h-3.17l-1.24-1.35A1.99 1.99 0 0 0 14.12 3H9.88c-.56 0-1.1.24-1.47.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-3 12H7a.5.5 0 0 1-.4-.8l2-2.67c.2-.27.6-.27.8 0L11.25 16l2.6-3.47c.2-.27.6-.27.8 0l2.75 3.67a.5.5 0 0 1-.4.8z"
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
export class SiPhotoCameraBackIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
