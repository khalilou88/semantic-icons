import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-trend-up-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.75 4C4.75 3.58579 4.41421 3.25 4 3.25C3.58579 3.25 3.25 3.58579 3.25 4V18.5C3.25 19.7426 4.25736 20.75 5.5 20.75H20.0005C20.4147 20.75 20.7505 20.4142 20.7505 20C20.7505 19.5858 20.4147 19.25 20.0005 19.25H5.5C5.08579 19.25 4.75 18.9142 4.75 18.5V15.7301L9.19964 11.2802L12.622 14.7026C12.7626 14.8432 12.9534 14.9222 13.1523 14.9222C13.3512 14.9222 13.542 14.8432 13.6826 14.7026L17.9972 10.388L17.9971 12.1165C17.997 12.5308 18.3328 12.8666 18.747 12.8666C19.1612 12.8666 19.497 12.5309 19.4971 12.1166L19.4973 8.58111C19.4973 8.38218 19.4183 8.19141 19.2777 8.05074C19.137 7.91008 18.9462 7.83105 18.7473 7.83105H15.2115C14.7973 7.83105 14.4615 8.16684 14.4615 8.58105C14.4615 8.99527 14.7973 9.33105 15.2115 9.33105H16.9328L13.1523 13.1116L9.72996 9.68923C9.58931 9.54857 9.39854 9.46956 9.19963 9.46956C9.00071 9.46956 8.80994 9.54858 8.66929 9.68924L4.75 13.6087V4Z"
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
export class SiTrendUp1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
