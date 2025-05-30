import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-train-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 13.3125C11.0335 13.3125 10.25 14.096 10.25 15.0625C10.25 16.029 11.0335 16.8125 12 16.8125C12.9665 16.8125 13.7501 16.029 13.7501 15.0625C13.7501 14.096 12.9665 13.3125 12 13.3125Z"
      fill="#323544"
    />
    <svg:path
      d="M3.875 5.5C3.875 4.25736 4.88236 3.25 6.125 3.25H17.875C19.1176 3.25 20.125 4.25736 20.125 5.5V17.25C20.125 18.4926 19.1176 19.5 17.875 19.5H17.1857L18.4053 20.7197C18.6982 21.0126 18.6982 21.4874 18.4053 21.7803C18.1124 22.0732 17.6376 22.0732 17.3447 21.7803L15.0643 19.5H8.93566L6.65533 21.7803C6.36244 22.0732 5.88756 22.0732 5.59467 21.7803C5.30178 21.4874 5.30178 21.0126 5.59467 20.7197L6.81434 19.5H6.125C4.88236 19.5 3.875 18.4926 3.875 17.25V5.5ZM18.625 5.5C18.625 5.08579 18.2892 4.75 17.875 4.75H12.75V10.6249H18.625V5.5ZM6.125 4.75C5.71079 4.75 5.375 5.08579 5.375 5.5V10.6249H11.25V4.75H6.125ZM5.375 12.1249V17.25C5.375 17.6642 5.71079 18 6.125 18H17.875C18.2892 18 18.625 17.6642 18.625 17.25V12.1249H5.375Z"
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
export class SiTrain1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
