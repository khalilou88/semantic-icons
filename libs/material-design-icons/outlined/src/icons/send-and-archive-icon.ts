import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-send-and-archive-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m11 12-6-1.5V7.01l8.87 3.73c.94-.47 2-.75 3.13-.75.1 0 .19.01.28.01L3 4v16l7-2.95V17c0-.8.14-1.56.39-2.28L5 16.99V13.5l6-1.5z"
    />
    <svg:path
      d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8-3-3 .71-.71 1.79 1.79V14h1v4.09l1.79-1.79.71.7-3 3z"
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
export class SiSendAndArchiveIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
