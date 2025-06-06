import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-font-download-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m12.58 9.75-.87-.87.23-.66h.1l.54 1.53zm-2.23-2.23.2-.52a1.55 1.55 0 0 1 2.9 0l2.17 5.79L22 19.17V4c0-1.1-.9-2-2-2H4.83l5.52 5.52zm10.84 15.09a.996.996 0 0 1-1.41 0l-.61-.61H4c-1.1 0-2-.9-2-2V4.83l-.61-.61A.996.996 0 1 1 2.8 2.81l18.38 18.38c.4.39.4 1.03.01 1.42zm-9.09-7.68-3.3-3.3-1.9 5.07c-.23.63.23 1.3.9 1.3h.01c.41 0 .77-.26.9-.64l.86-2.43h2.53z"
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
export class SiFontDownloadOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
