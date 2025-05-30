import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-locked-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.75 15.5C12.75 15.0858 12.4142 14.75 12 14.75C11.5858 14.75 11.25 15.0858 11.25 15.5V17.5C11.25 17.9142 11.5858 18.25 12 18.25C12.4142 18.25 12.75 17.9142 12.75 17.5V15.5Z"
      fill="#323544"
    />
    <svg:path
      d="M12 1.25C9.37665 1.25 7.25 3.37665 7.25 6V8.69562C5.57125 10.071 4.5 12.1604 4.5 14.5C4.5 18.6421 7.85786 22 12 22C16.1421 22 19.5 18.6421 19.5 14.5C19.5 12.1604 18.4288 10.071 16.75 8.69562V6C16.75 3.37665 14.6234 1.25 12 1.25ZM12 7C10.8356 7 9.73325 7.26533 8.75 7.73883V6C8.75 4.20507 10.2051 2.75 12 2.75C13.7949 2.75 15.25 4.20507 15.25 6V7.73883C14.2667 7.26533 13.1644 7 12 7ZM12 8.5C15.3137 8.5 18 11.1863 18 14.5C18 17.8137 15.3137 20.5 12 20.5C8.68629 20.5 6 17.8137 6 14.5C6 11.1863 8.68629 8.5 12 8.5Z"
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
export class SiLocked1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
