import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-transcribe-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22.54 10.28a3.29 3.29 0 0 1 0-2.54c.19-.45.1-.96-.24-1.3l-.1-.1c-.56-.56-1.51-.44-1.88.26-.8 1.48-.79 3.24.03 4.79.37.69 1.31.83 1.86.27l.1-.1c.34-.33.42-.84.23-1.28zm-3.72 4.83c.4-.4.46-1.02.13-1.48-1.97-2.73-1.96-6.39.01-9.23.32-.47.26-1.1-.14-1.5-.5-.5-1.34-.46-1.78.1-2.73 3.54-2.73 8.36.02 12 .43.56 1.27.61 1.76.11zM9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6.39 2.56C13.71 14.7 11.53 14 9 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 18.22V20c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1.78c0-1.12-.61-2.15-1.61-2.66z"
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
export class SiTranscribeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
