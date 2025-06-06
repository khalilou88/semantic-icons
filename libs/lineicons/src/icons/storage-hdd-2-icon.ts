import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-storage-hdd-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.787 15.6126C11.1768 15.7025 11.5829 15.75 12 15.75C14.9685 15.75 17.375 13.3435 17.375 10.375C17.375 7.40647 14.9685 5 12 5C9.03147 5 6.625 7.40647 6.625 10.375C6.625 12.0921 7.43016 13.6211 8.68354 14.6052L7.33598 16.4521C6.83707 17.1359 7.04126 18.1013 7.77431 18.5245C8.50736 18.9477 9.44555 18.6419 9.78827 17.8679L10.787 15.6126ZM12 6.5C14.1401 6.5 15.875 8.2349 15.875 10.375C15.875 12.5151 14.1401 14.25 12 14.25C11.7994 14.25 11.6024 14.2348 11.4101 14.2054L12.3351 12.1165C12.4903 11.766 12.3562 11.3549 12.0243 11.1633C11.6924 10.9717 11.2694 11.0611 11.0434 11.3708L9.56845 13.3923C8.68811 12.682 8.125 11.5943 8.125 10.375C8.125 8.2349 9.8599 6.5 12 6.5Z"
      fill="#323544"
    />
    <svg:path
      d="M18 2C19.2426 2 20.25 3.00736 20.25 4.25V19.75C20.25 20.9926 19.2426 22 18 22H6C4.75736 22 3.75 20.9926 3.75 19.75V4.25C3.75 3.00736 4.75736 2 6 2H18ZM18.75 4.25C18.75 3.83579 18.4142 3.5 18 3.5L6 3.5C5.58579 3.5 5.25 3.83579 5.25 4.25L5.25 19.75C5.25 20.1642 5.58579 20.5 6 20.5H18C18.4142 20.5 18.75 20.1642 18.75 19.75L18.75 4.25Z"
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
export class SiStorageHdd2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
