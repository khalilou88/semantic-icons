import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-file-download-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18 15.17V15h2v2.17l-2-2zm-2.59-2.58L17 11l-1.41-1.41L14 11.17l1.41 1.42zM13 10.17V4h-2v4.17l2 2zm8.19 11.02-1.78-1.78-16.6-16.6-1.42 1.41 6.19 6.19L7 11l5 5 .59-.59L15.17 18H6v-3H4v3c0 1.1.9 2 2 2h11.17l2.61 2.61 1.41-1.42z"
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
export class SiFileDownloadOffIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
