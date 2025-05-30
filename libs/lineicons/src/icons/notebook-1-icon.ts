import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-notebook-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.75 2C5.50736 2 4.5 3.00736 4.5 4.25V6.25H3.25C2.83579 6.25 2.5 6.58579 2.5 7C2.5 7.41421 2.83579 7.75 3.25 7.75H4.5V11.25H3.25C2.83579 11.25 2.5 11.5858 2.5 12C2.5 12.4142 2.83579 12.75 3.25 12.75H4.5V16.25H3.25C2.83579 16.25 2.5 16.5858 2.5 17C2.5 17.4142 2.83579 17.75 3.25 17.75H4.5V19.75C4.5 20.9926 5.50736 22 6.75 22H17.25C18.4926 22 19.5 20.9926 19.5 19.75V4.25C19.5 3.00736 18.4926 2 17.25 2H6.75ZM6 17.75H7.25C7.66421 17.75 8 17.4142 8 17C8 16.5858 7.66421 16.25 7.25 16.25H6V12.75H7.25C7.66421 12.75 8 12.4142 8 12C8 11.5858 7.66421 11.25 7.25 11.25H6V7.75H7.25C7.66421 7.75 8 7.41421 8 7C8 6.58579 7.66421 6.25 7.25 6.25H6V4.25C6 3.83579 6.33579 3.5 6.75 3.5H17.25C17.6642 3.5 18 3.83579 18 4.25V19.75C18 20.1642 17.6642 20.5 17.25 20.5H6.75C6.33579 20.5 6 20.1642 6 19.75V17.75Z"
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
export class SiNotebook1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
