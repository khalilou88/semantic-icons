import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-qr-code-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15 21h-2v-2h2v2zm-2-7h-2v5h2v-5zm8-2h-2v4h2v-4zm-2-2h-2v2h2v-2zM7 12H5v2h2v-2zm-2-2H3v2h2v-2zm7-5h2V3h-2v2zm-7.5-.5v3h3v-3h-3zM8 9H4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1zm-3.5 7.5v3h3v-3h-3zM8 21H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1zm8.5-16.5v3h3v-3h-3zM20 9h-4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1zm-1 10v-3h-4v2h2v3h4v-2h-2zm-2-7h-4v2h4v-2zm-4-2H7v2h2v2h2v-2h2v-2zm1-1V7h-2V5h-2v4h4zM6.75 5.25h-1.5v1.5h1.5v-1.5zm0 12h-1.5v1.5h1.5v-1.5zm12-12h-1.5v1.5h1.5v-1.5z"
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
export class SiQrCode2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
