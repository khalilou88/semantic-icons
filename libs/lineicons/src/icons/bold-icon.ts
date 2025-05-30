import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bold-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.5 2.75C3.5 2.33579 3.83579 2 4.25 2H13.125C16.0935 2 18.5 4.40647 18.5 7.375C18.5 9.07603 17.7098 10.5925 16.4765 11.5774C18.5328 12.3319 20 14.3071 20 16.625C20 19.5935 17.5935 22 14.625 22H4.25C3.83579 22 3.5 21.6642 3.5 21.25C3.5 20.8358 3.83579 20.5 4.25 20.5H5V3.5H4.25C3.83579 3.5 3.5 3.16421 3.5 2.75ZM6.5 11.25H13.125C15.2651 11.25 17 9.5151 17 7.375C17 5.2349 15.2651 3.5 13.125 3.5H6.5V11.25ZM6.5 12.75V20.5H14.625C16.7651 20.5 18.5 18.7651 18.5 16.625C18.5 14.4849 16.7651 12.75 14.625 12.75H6.5Z"
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
export class SiBoldIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
