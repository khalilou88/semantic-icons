import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-playlist-add-check-circle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 8c0-.55.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1zm0 3c0-.55.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1zm3 3c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1h1c.55 0 1 .45 1 1zm8.29.12-3.54 3.54a.996.996 0 0 1-1.41 0l-1.41-1.41a.996.996 0 1 1 1.41-1.41l.71.71 2.83-2.83a.996.996 0 0 1 1.41 0c.39.38.39 1.01 0 1.4z"
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
export class SiPlaylistAddCheckCircleIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
