import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bedtime-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.95 5.13 9.03 6.2c.05-.55.12-1.12.24-1.71-.46.17-.9.39-1.32.64zM5.13 7.96A7.84 7.84 0 0 0 4 12c0 4.41 3.59 8 8 8 1.45 0 2.84-.4 4.05-1.12L5.13 7.96z"
      opacity=".3"
    />
    <svg:path
      d="M9.27 4.49c-.13.59-.2 1.15-.24 1.71l2.05 2.05c-.27-2.05.1-4.22 1.26-6.23-.12 0-.23-.01-.35-.01a9.9 9.9 0 0 0-5.5 1.65l1.46 1.46c.42-.24.86-.46 1.32-.63zM2.81 2.81 1.39 4.22l2.27 2.27A9.934 9.934 0 0 0 2 12c0 5.52 4.48 10 10 10 2.04 0 3.92-.63 5.5-1.67l2.28 2.28 1.41-1.41L2.81 2.81zM12 20c-4.41 0-8-3.59-8-8 0-1.48.42-2.85 1.13-4.04l10.92 10.92C14.84 19.6 13.45 20 12 20z"
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
export class SiBedtimeOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
