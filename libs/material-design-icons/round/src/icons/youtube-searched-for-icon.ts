import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-youtube-searched-for-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.01 14h-.8l-.27-.27a6.48 6.48 0 0 0 1.51-5.09C17.11 6 15.1 3.78 12.5 3.18 8.26 2.2 4.51 5.53 4.51 9.5h-2.1a.5.5 0 0 0-.31.89l3.4 2.75c.19.2.51.21.71.01l2.9-2.79c.32-.31.1-.86-.35-.86H6.51c0-2.49 2-4.48 4.46-4.5 2.44-.02 4.54 2.05 4.54 4.49 0 2.48-2.02 4.51-4.5 4.51-.45 0-.89-.07-1.3-.19-.34-.1-.71 0-.96.26-.53.53-.32 1.45.39 1.66.59.17 1.22.27 1.87.27 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l4.27 4.25c.41.41 1.07.41 1.48 0 .41-.41.41-1.08 0-1.49L17.01 14z"
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
export class SiYoutubeSearchedForIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
