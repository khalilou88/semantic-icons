import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sd-card-mini-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8 4V9.79335C8 10.455 7.73768 11.0897 7.27052 11.5584L6 12.8329V20H18V4H8ZM7 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V12.4196C4 12.1549 4.10493 11.901 4.29179 11.7135L5.8541 10.1464C5.94754 10.0526 6 9.92569 6 9.79335V3C6 2.44772 6.44772 2 7 2ZM15 5H17V9H15V5ZM12 5H14V9H12V5ZM9 5H11V9H9V5Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSdCardMiniLineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
