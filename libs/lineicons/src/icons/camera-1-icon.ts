import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-camera-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 7.00195C9.37665 7.00195 7.25 9.1286 7.25 11.752C7.25 14.3753 9.37665 16.502 12 16.502C14.6234 16.502 16.75 14.3753 16.75 11.752C16.75 9.1286 14.6234 7.00195 12 7.00195ZM8.75 11.752C8.75 9.95703 10.2051 8.50195 12 8.50195C13.7949 8.50195 15.25 9.95703 15.25 11.752C15.25 13.5469 13.7949 15.002 12 15.002C10.2051 15.002 8.75 13.5469 8.75 11.752Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.9939 2.75C9.28408 2.75 8.61587 3.08496 8.19114 3.65369L7.59735 4.4488C7.45577 4.63838 7.23304 4.75003 6.99643 4.75003H4.25C3.00736 4.75003 2 5.75739 2 7.00003V17.25C2 18.4927 3.00736 19.5 4.25 19.5H19.75C20.9926 19.5 22 18.4927 22 17.25V7.00003C22 5.75739 20.9926 4.75003 19.75 4.75003H17.0035C16.7669 4.75003 16.5442 4.63838 16.4026 4.4488L15.8088 3.65369C15.3841 3.08496 14.7159 2.75 14.006 2.75H9.9939ZM9.39298 4.55123C9.53456 4.36165 9.75729 4.25 9.9939 4.25H14.006C14.2426 4.25 14.4654 4.36165 14.607 4.55123L15.2008 5.34635C15.6255 5.91508 16.2937 6.25003 17.0035 6.25003H19.75C20.1642 6.25003 20.5 6.58582 20.5 7.00003V17.25C20.5 17.6642 20.1642 18 19.75 18H4.25C3.83579 18 3.5 17.6642 3.5 17.25V7.00003C3.5 6.58582 3.83579 6.25003 4.25 6.25003H6.99643C7.70625 6.25003 8.37446 5.91508 8.79919 5.34634L9.39298 4.55123Z"
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
export class SiCamera1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
