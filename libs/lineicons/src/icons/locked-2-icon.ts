import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-locked-2-icon]',
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
      d="M6.75 7.25C6.75 4.3505 9.10051 2 12 2C14.8995 2 17.25 4.35051 17.25 7.25V9.125H18.5C19.7426 9.125 20.75 10.1324 20.75 11.375V17.2495C20.75 19.8729 18.6234 21.9995 16 21.9995H8C5.37665 21.9995 3.25 19.8729 3.25 17.2495V11.375C3.25 10.1324 4.25736 9.125 5.5 9.125H6.75V7.25ZM8.25 9.125H15.75V7.25C15.75 5.17893 14.0711 3.5 12 3.5C9.92893 3.5 8.25 5.17893 8.25 7.25V9.125ZM5.5 10.625C5.08579 10.625 4.75 10.9608 4.75 11.375V17.2495C4.75 19.0444 6.20507 20.4995 8 20.4995H16C17.7949 20.4995 19.25 19.0444 19.25 17.2495V11.375C19.25 10.9608 18.9142 10.625 18.5 10.625H5.5Z"
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
export class SiLocked2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
