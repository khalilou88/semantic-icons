import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-groups-3-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.43 15.48c-1.1-.49-2.26-.73-3.43-.73-1.18 0-2.33.25-3.43.73-.23.1-.4.29-.49.52h7.85a.978.978 0 0 0-.5-.52z"
      opacity=".3"
    />
    <svg:circle cx="12" cy="9" r="1" opacity=".3" />
    <svg:path
      d="M16.24 13.65c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9A2.988 2.988 0 0 0 6 16.39V18h12v-1.61c0-1.18-.68-2.26-1.76-2.74zM8.07 16a.96.96 0 0 1 .49-.52c1.1-.49 2.26-.73 3.43-.73 1.18 0 2.33.25 3.43.73.23.1.4.29.49.52H8.07zm-6.85-1.42A2.01 2.01 0 0 0 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58zm21.56 0A6.95 6.95 0 0 0 20 14c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57c0-.81-.48-1.53-1.22-1.85zM12 12c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM1.497 11 4 8.497 6.503 11 4 13.503zM20 9l-2.5 4h5z"
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
export class SiGroups3Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
