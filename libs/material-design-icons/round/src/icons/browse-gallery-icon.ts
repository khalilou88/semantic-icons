import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-browse-gallery-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9 3a9 9 0 1 0 .001 18.001A9 9 0 0 0 9 3zm2.09 12.5L8.59 13c-.38-.38-.59-.88-.59-1.41V8c0-.55.45-1 1-1s1 .45 1 1v3.59l2.5 2.5a.996.996 0 1 1-1.41 1.41z"
    />
    <svg:path
      d="M17.99 5.08c0 .37.21.69.53.88a6.98 6.98 0 0 1 0 12.08c-.32.19-.53.51-.53.88 0 .77.84 1.25 1.51.86C22.18 18.22 24 15.32 24 12c0-3.32-1.82-6.22-4.5-7.78-.67-.39-1.51.09-1.51.86z"
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
export class SiBrowseGalleryIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
