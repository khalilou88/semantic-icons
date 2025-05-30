import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-board-writing-3-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.75 3.25C12.75 2.83579 12.4142 2.5 12 2.5C11.5858 2.5 11.25 2.83579 11.25 3.25V4.5H4.75C3.50736 4.5 2.5 5.50736 2.5 6.75V15C2.5 16.2426 3.50736 17.25 4.75 17.25H7.90742L6.79074 20.507C6.6564 20.8988 6.86514 21.3253 7.25696 21.4597C7.64878 21.594 8.07532 21.3853 8.20966 20.9934L9.49313 17.25H11.25V21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25V17.25H14.5073L15.7907 20.9934C15.9251 21.3853 16.3516 21.594 16.7434 21.4597C17.1353 21.3253 17.344 20.8988 17.2097 20.507L16.093 17.25H19.25C20.4926 17.25 21.5 16.2426 21.5 15V6.75C21.5 5.50736 20.4926 4.5 19.25 4.5H12.75V3.25ZM19.25 15.75H4.75C4.33579 15.75 4 15.4142 4 15V6.75C4 6.33579 4.33579 6 4.75 6H19.25C19.6642 6 20 6.33579 20 6.75V15C20 15.4142 19.6642 15.75 19.25 15.75Z"
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
export class SiBoardWriting3Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
