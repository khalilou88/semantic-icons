import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-key-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.9861 4.52838L17.0901 6.63241L16.0312 7.69129L14.9878 6.64787C14.6949 6.35497 14.2201 6.35497 13.9272 6.64787C13.6343 6.94076 13.6343 7.41563 13.9272 7.70853L14.9706 8.75195L12.6366 11.0859C10.5314 9.4966 7.52332 9.66111 5.60497 11.5795C3.50668 13.6778 3.50668 17.0798 5.60497 19.1781C7.70326 21.2763 11.1053 21.2763 13.2036 19.1781C15.1218 17.2598 15.2864 14.2519 13.6972 12.1466L19.7413 6.1026C20.0342 5.8097 20.0342 5.33483 19.7413 5.04194C19.4484 4.74904 18.9735 4.74904 18.6806 5.04194L18.1508 5.57175L16.0468 3.46772C15.7539 3.17482 15.279 3.17482 14.9861 3.46772C14.6932 3.76061 14.6932 4.23548 14.9861 4.52838ZM12.1282 12.6255L12.1427 12.6405L12.1577 12.655C13.6554 14.1687 13.6505 16.6098 12.1429 18.1174C10.6304 19.6299 8.17814 19.6299 6.66563 18.1174C5.15312 16.6049 5.15312 14.1526 6.66563 12.6401C8.17323 11.1325 10.6145 11.1276 12.1282 12.6255Z"
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
export class SiKey1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
