import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sports-basketball-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.09 11h4.86a9.951 9.951 0 0 0-1.54-4.4 5.987 5.987 0 0 0-3.32 4.4zM6.91 11a5.987 5.987 0 0 0-3.32-4.4A9.951 9.951 0 0 0 2.05 11h4.86zm8.16 0a7.994 7.994 0 0 1 4.06-6A9.969 9.969 0 0 0 13 2.05V11h2.07zm-6.14 0H11V2.05A9.943 9.943 0 0 0 4.87 5a7.994 7.994 0 0 1 4.06 6zm6.14 2H13v8.95A9.943 9.943 0 0 0 19.13 19a7.994 7.994 0 0 1-4.06-6zM3.59 17.4A6.029 6.029 0 0 0 6.91 13H2.05c.16 1.61.71 3.11 1.54 4.4zm13.5-4.4a5.987 5.987 0 0 0 3.32 4.4 9.951 9.951 0 0 0 1.54-4.4h-4.86zm-8.16 0a7.994 7.994 0 0 1-4.06 6A9.969 9.969 0 0 0 11 21.95V13H8.93z"
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
export class SiSportsBasketballIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
