import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-book-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.25 5C7.83579 5 7.5 5.33579 7.5 5.75V9.75C7.5 10.1642 7.83579 10.5 8.25 10.5H15.75C16.1642 10.5 16.5 10.1642 16.5 9.75V5.75C16.5 5.33579 16.1642 5 15.75 5H8.25ZM9 9V6.5H15V9H9Z"
      fill="#323544"
    />
    <svg:path
      d="M6.75 2C5.50736 2 4.5 3.00736 4.5 4.25V19C4.5 20.6569 5.84315 22 7.5 22H18.75C19.1642 22 19.5 21.6642 19.5 21.25C19.5 20.8358 19.1642 20.5 18.75 20.5H18V17.5H18.75C19.1642 17.5 19.5 17.1642 19.5 16.75V4.25C19.5 3.00736 18.4926 2 17.25 2H6.75ZM18 16H7.5C6.95357 16 6.44126 16.1461 6 16.4013V4.25C6 3.83579 6.33579 3.5 6.75 3.5H17.25C17.6642 3.5 18 3.83579 18 4.25V16ZM16.5 17.5V20.5H7.5C6.67157 20.5 6 19.8284 6 19C6 18.1716 6.67157 17.5 7.5 17.5H16.5Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBook1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
