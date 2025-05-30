import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-trend-down-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.75 4C4.75 3.58579 4.41421 3.25 4 3.25C3.58579 3.25 3.25 3.58579 3.25 4V18.5C3.25 19.7426 4.25736 20.75 5.5 20.75H20.0005C20.4147 20.75 20.7505 20.4142 20.7505 20C20.7505 19.5858 20.4147 19.25 20.0005 19.25H5.5C5.08579 19.25 4.75 18.9142 4.75 18.5V10.3913L8.66929 14.3108C8.80994 14.4514 9.00071 14.5304 9.19963 14.5304C9.39854 14.5304 9.58931 14.4514 9.72996 14.3108L13.1523 10.8884L16.9328 14.6689H15.2115C14.7973 14.6689 14.4615 15.0047 14.4615 15.4189C14.4615 15.8332 14.7973 16.1689 15.2115 16.1689H18.7473C18.9462 16.1689 19.137 16.0899 19.2777 15.9493C19.4183 15.8086 19.4973 15.6178 19.4973 15.4189L19.4971 11.8834C19.497 11.4691 19.1612 11.1334 18.747 11.1334C18.3328 11.1334 17.997 11.4692 17.9971 11.8835L17.9972 13.612L13.6826 9.29743C13.542 9.15678 13.3512 9.07776 13.1523 9.07776C12.9534 9.07776 12.7626 9.15678 12.622 9.29743L9.19964 12.7198L4.75 8.26994V4Z"
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
export class SiTrendDown1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
