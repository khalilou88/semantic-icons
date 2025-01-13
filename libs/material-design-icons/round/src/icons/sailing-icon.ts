import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sailing-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11 13V3.59c0-.49-.63-.69-.91-.29l-6.54 9.41c-.23.33.01.79.41.79h6.54c.28 0 .5-.22.5-.5zm9.99-.02C20.72 7.07 15.9 2.32 13.4 1.23c-.37-.16-.77.2-.67.59.3 1.13.76 3.28.76 5.68 0 2.44-.49 4.39-.78 5.35-.1.32.14.65.48.65h7.28c.29 0 .53-.24.52-.52zM20.62 15H3.38c-.73 0-1.22.76-.92 1.42.43.92 1.07 1.71 1.86 2.31.38-.16.74-.38 1.06-.63.35-.29.87-.29 1.23 0 .67.53 1.49.9 2.39.9.9 0 1.72-.37 2.39-.91.35-.28.87-.28 1.22 0 .67.54 1.49.91 2.39.91.9 0 1.72-.37 2.39-.91.35-.29.87-.28 1.23 0 .32.26.67.48 1.06.63.79-.6 1.43-1.39 1.86-2.31.3-.65-.19-1.41-.92-1.41zM22 22c0-.55-.45-1-1-1-.87 0-1.73-.24-2.53-.7a.954.954 0 0 0-.94 0c-1.59.9-3.47.9-5.06 0a.98.98 0 0 0-.94 0c-1.59.9-3.47.9-5.06 0a.98.98 0 0 0-.94 0c-.8.46-1.66.7-2.53.7-.55 0-1 .45-1 1s.45 1 1 1c1.15 0 2.3-.31 3.33-.94 1.66 1.11 3.78 1.01 5.58.14a6.36 6.36 0 0 0 6.09.05c.95.5 1.97.75 3 .75.55 0 1-.45 1-1z"
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
export class SiSailingIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
