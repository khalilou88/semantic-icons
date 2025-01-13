import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-send-time-extension-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 4h-6a2.5 2.5 0 0 0-5 0H3.01v5.8C5.7 9.8 6 11.96 6 12.5s-.29 2.7-3 2.7V21h5.8c0-2.16 1.37-2.78 2.2-2.94v-9.3l9 4.5V4z"
    />
    <svg:path d="M13 12v4l4 1-4 1v4l10-5z" />
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
export class SiSendTimeExtensionIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
