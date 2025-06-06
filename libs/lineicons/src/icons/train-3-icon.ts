import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-train-3-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.75 15.0625C7.75 14.3721 8.30964 13.8125 9 13.8125C9.69036 13.8125 10.2501 14.3721 10.2501 15.0625C10.2501 15.7529 9.69046 16.3125 9.0001 16.3125C8.30974 16.3125 7.75 15.7529 7.75 15.0625Z"
      fill="#323544"
    />
    <svg:path
      d="M15 13.8125C14.3096 13.8125 13.75 14.3721 13.75 15.0625C13.75 15.7529 14.3096 16.3125 15 16.3125C15.6904 16.3125 16.2501 15.7529 16.2501 15.0625C16.2501 14.3721 15.6904 13.8125 15 13.8125Z"
      fill="#323544"
    />
    <svg:path
      d="M6.125 3.25C4.88236 3.25 3.875 4.25736 3.875 5.5V17.25C3.875 18.4926 4.88236 19.5 6.125 19.5H6.81434L5.59467 20.7197C5.30178 21.0126 5.30178 21.4874 5.59467 21.7803C5.88756 22.0732 6.36244 22.0732 6.65533 21.7803L8.93566 19.5H15.0643L17.3447 21.7803C17.6376 22.0732 18.1124 22.0732 18.4053 21.7803C18.6982 21.4874 18.6982 21.0126 18.4053 20.7197L17.1857 19.5H17.875C19.1176 19.5 20.125 18.4926 20.125 17.25V5.5C20.125 4.25736 19.1176 3.25 17.875 3.25H6.125ZM18.625 10.6249H12.75V4.75H17.875C18.2892 4.75 18.625 5.08579 18.625 5.5V10.6249ZM11.25 4.75V10.6249H5.375V5.5C5.375 5.08579 5.71079 4.75 6.125 4.75H11.25ZM5.375 12.1249H18.625V17.25C18.625 17.6642 18.2892 18 17.875 18H6.125C5.71079 18 5.375 17.6642 5.375 17.25V12.1249Z"
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
export class SiTrain3Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
