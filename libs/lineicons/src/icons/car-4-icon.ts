import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-car-4-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.69961 3.25C6.76139 3.25 5.92165 3.83218 5.59256 4.71079L4.64148 7.25L2.75 7.25C2.33579 7.25 2 7.58579 2 8C2 8.41421 2.33579 8.75 2.75 8.75H4.07964L4.03637 8.86552C3.14353 9.1639 2.5 10.0068 2.5 11V18C2.5 18.8284 3.17157 19.5 4 19.5C4.82843 19.5 5.5 18.8284 5.5 18V17H18.5V18C18.5 18.8284 19.1716 19.5 20 19.5C20.8284 19.5 21.5 18.8284 21.5 18V11C21.5 10.0073 20.8571 9.16474 19.965 8.86597L19.9215 8.75H21.25C21.6642 8.75 22 8.41421 22 8C22 7.58579 21.6642 7.25 21.25 7.25H19.3597L18.4086 4.71079C18.0795 3.83218 17.2398 3.25 16.3016 3.25H7.69961ZM20 11V15.5H16.75V14C16.75 12.7574 15.7426 11.75 14.5 11.75H9.5C8.25736 11.75 7.25 12.7574 7.25 14V15.5H4V11C4 10.5858 4.33579 10.25 4.75 10.25H19.25C19.6642 10.25 20 10.5858 20 11ZM18.3198 8.75H5.68141L6.99726 5.23693C7.10695 4.94406 7.38687 4.75 7.69961 4.75H16.3016C16.6143 4.75 16.8942 4.94406 17.0039 5.23693L18.3198 8.75ZM15.25 15.5H8.75V14C8.75 13.5858 9.08579 13.25 9.5 13.25H14.5C14.9142 13.25 15.25 13.5858 15.25 14V15.5Z"
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
export class SiCar4Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
