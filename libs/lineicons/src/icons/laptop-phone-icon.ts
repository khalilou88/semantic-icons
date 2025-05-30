import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-laptop-phone-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.24683 3.25C5.00419 3.25 3.99683 4.25736 3.99683 5.5V13.6742C3.86766 13.8513 3.76303 14.0493 3.6887 14.264L2.47716 17.764C1.97124 19.2256 3.05673 20.75 4.60338 20.75H9.74677V19.25H4.60338C4.08783 19.25 3.726 18.7419 3.89464 18.2547L5.10618 14.7547C5.21074 14.4526 5.49527 14.25 5.81492 14.25H9.74677V12.75H5.49683V5.5C5.49683 5.08579 5.83261 4.75 6.24683 4.75H17.7468C18.161 4.75 18.4968 5.08579 18.4968 5.5V9.75H19.9968V5.5C19.9968 4.25736 18.9894 3.25 17.7468 3.25H6.24683Z"
      fill="#323544"
    />
    <svg:path
      d="M15.8118 18.25C15.8118 17.8082 16.17 17.45 16.6118 17.45H16.6218C17.0636 17.45 17.4218 17.8082 17.4218 18.25C17.4218 18.6918 17.0636 19.05 16.6218 19.05H16.6118C16.17 19.05 15.8118 18.6918 15.8118 18.25Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.5918 13.5C12.5918 12.2574 13.5992 11.25 14.8418 11.25H18.4019C19.6445 11.25 20.6519 12.2574 20.6519 13.5V19.75C20.6519 20.9926 19.6445 22 18.4019 22H14.8418C13.5992 22 12.5918 20.9926 12.5918 19.75V13.5ZM14.8418 12.75C14.4276 12.75 14.0918 13.0858 14.0918 13.5V19.75C14.0918 20.1642 14.4276 20.5 14.8418 20.5H18.4019C18.8161 20.5 19.1519 20.1642 19.1519 19.75V13.5C19.1519 13.0858 18.8161 12.75 18.4019 12.75H14.8418Z"
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
export class SiLaptopPhoneIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
