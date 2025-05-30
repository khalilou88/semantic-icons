import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tab-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.9951 17.25C11.4428 17.25 10.9951 17.6977 10.9951 18.25C10.9951 18.8023 11.4428 19.25 11.9951 19.25H12.0051C12.5574 19.25 13.0051 18.8023 13.0051 18.25C13.0051 17.6977 12.5574 17.25 12.0051 17.25H11.9951Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.75 2C5.50736 2 4.5 3.00736 4.5 4.25V19.75C4.5 20.9926 5.50736 22 6.75 22H17.25C18.4926 22 19.5 20.9926 19.5 19.75V4.25C19.5 3.00736 18.4926 2 17.25 2H6.75ZM6 4.25C6 3.83579 6.33579 3.5 6.75 3.5H17.25C17.6642 3.5 18 3.83579 18 4.25V19.75C18 20.1642 17.6642 20.5 17.25 20.5H6.75C6.33579 20.5 6 20.1642 6 19.75V4.25Z"
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
export class SiTabIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
