import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-unlocked-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.5 16C10.5 15.1716 11.1716 14.5 12 14.5C12.8284 14.5 13.5 15.1716 13.5 16V17.5C13.5 18.3284 12.8284 19 12 19C11.1716 19 10.5 18.3284 10.5 17.5V16Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2C9.10051 2 6.75 4.35051 6.75 7.25V9.125H5.5C4.25736 9.125 3.25 10.1324 3.25 11.375V17.2495C3.25 19.8729 5.37665 21.9995 8 21.9995H16C18.6234 21.9995 20.75 19.8729 20.75 17.2495V11.375C20.75 10.1324 19.7426 9.125 18.5 9.125H8.25V7.25C8.25 5.17893 9.92893 3.5 12 3.5C13.4184 3.5 14.6541 4.28724 15.2919 5.45221C15.4909 5.81553 15.9466 5.9488 16.31 5.74987C16.6733 5.55095 16.8066 5.09516 16.6076 4.73184C15.7172 3.10553 13.9882 2 12 2ZM7.47268 10.625C7.48175 10.6253 7.49085 10.6255 7.5 10.6255C7.50915 10.6255 7.51825 10.6253 7.52732 10.625H18.5C18.9142 10.625 19.25 10.9608 19.25 11.375V17.2495C19.25 19.0444 17.7949 20.4995 16 20.4995H8C6.20507 20.4995 4.75 19.0444 4.75 17.2495V11.375C4.75 10.9608 5.08579 10.625 5.5 10.625H7.47268Z"
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
export class SiUnlocked2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
