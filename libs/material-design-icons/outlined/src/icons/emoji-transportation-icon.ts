import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-emoji-transportation-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.57 10.66c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66L10 14.77l.01 5.51c0 .38.31.72.69.72h.62c.38 0 .68-.38.68-.76V19h8v1.24c0 .38.31.76.69.76h.61c.38 0 .69-.34.69-.72l.01-1.37v-4.14l-1.43-4.11zm-8.16.34h7.19l1.03 3h-9.25l1.03-3zM12 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
    <svg:path d="M14 9h1V3H7v5H2v13h1V9h5V4h6z" />
    <svg:path d="M5 11h2v2H5zm5-6h2v2h-2zM5 15h2v2H5zm0 4h2v2H5z" />
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
export class SiEmojiTransportationIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
