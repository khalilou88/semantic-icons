import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bookmark-added-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5 5c0-1.1.9-2 2-2h7a5.002 5.002 0 0 0 5 7.9v8.58c0 .72-.73 1.2-1.39.92L12 18l-5.61 2.4A.994.994 0 0 1 5 19.48V5zm17.07-1.66c.39.39.39 1.02 0 1.41l-3.54 3.54a.996.996 0 0 1-1.41 0l-1.41-1.41a.996.996 0 1 1 1.41-1.41l.71.71 2.83-2.83c.39-.4 1.02-.4 1.41-.01z"
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
export class SiBookmarkAddedIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
