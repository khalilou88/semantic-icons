import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pause-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7 3.25C5.75736 3.25 4.75 4.25736 4.75 5.5V18.4999C4.75 19.7426 5.75736 20.75 7 20.75H8.75C9.99264 20.75 11 19.7426 11 18.4999V5.5C11 4.25736 9.99264 3.25 8.75 3.25H7ZM6.25 5.5C6.25 5.08579 6.58579 4.75 7 4.75H8.75C9.16421 4.75 9.5 5.08579 9.5 5.5V18.4999C9.5 18.9142 9.16421 19.2499 8.75 19.2499H7C6.58579 19.2499 6.25 18.9142 6.25 18.4999V5.5Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.25 3.25C15.0074 3.25 14 4.25736 14 5.5V18.4999C14 19.7426 15.0074 20.75 16.25 20.75H18C19.2426 20.75 20.25 19.7426 20.25 18.4999V5.5C20.25 4.25736 19.2426 3.25 18 3.25H16.25ZM15.5 5.5C15.5 5.08579 15.8358 4.75 16.25 4.75H18C18.4142 4.75 18.75 5.08579 18.75 5.5V18.4999C18.75 18.9142 18.4142 19.2499 18 19.2499H16.25C15.8358 19.2499 15.5 18.9142 15.5 18.4999V5.5Z"
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
export class SiPauseIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
