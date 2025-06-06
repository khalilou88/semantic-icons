import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-dumbbell-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.75 16.5C7.75 16.9142 7.41421 17.25 7 17.25H5.5C4.25736 17.25 3.25 16.2426 3.25 15V12.75H2.75C2.33579 12.75 2 12.4142 2 12C2 11.5858 2.33579 11.25 2.75 11.25H3.25V9C3.25 7.75736 4.25736 6.75 5.5 6.75H7C7.41421 6.75 7.75 7.08579 7.75 7.5V11.25L16.25 11.25V7.5C16.25 7.08579 16.5858 6.75 17 6.75H18.5C19.7426 6.75 20.75 7.75736 20.75 9V11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75H20.75V15C20.75 16.2426 19.7426 17.25 18.5 17.25H17C16.5858 17.25 16.25 16.9142 16.25 16.5V12.75L7.75 12.75V16.5ZM19.25 9C19.25 8.58579 18.9142 8.25 18.5 8.25H17.75V15.75H18.5C18.9142 15.75 19.25 15.4142 19.25 15V9ZM4.75 15C4.75 15.4142 5.08579 15.75 5.5 15.75H6.25V8.25H5.5C5.08579 8.25 4.75 8.58579 4.75 9V15Z"
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
export class SiDumbbell1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
