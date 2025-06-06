import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pizza-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.3521 14.9594C11.855 14.9594 11.4521 15.3623 11.4521 15.8594C11.4521 16.3564 11.855 16.7594 12.3521 16.7594C12.8491 16.7594 13.2522 16.3564 13.2522 15.8594C13.2522 15.3623 12.8491 14.9594 12.3521 14.9594Z"
      fill="#323544"
    />
    <svg:path
      d="M8.55908 12C8.55908 11.0335 9.34258 10.25 10.3091 10.25C11.2756 10.25 12.0592 11.0335 12.0592 12C12.0592 12.9665 11.2757 13.75 10.3092 13.75C9.34268 13.75 8.55908 12.9665 8.55908 12Z"
      fill="#323544"
    />
    <svg:path
      d="M14.6289 10.0195C13.9385 10.0195 13.3789 10.5792 13.3789 11.2695C13.3789 11.9599 13.9385 12.5195 14.6289 12.5195C15.3193 12.5195 15.879 11.9599 15.879 11.2695C15.879 10.5792 15.3193 10.0195 14.6289 10.0195Z"
      fill="#323544"
    />
    <svg:path
      d="M2.82081 5.60434C8.14632 1.63189 15.8531 1.63189 21.1786 5.60434C22.1242 6.30965 22.242 7.59339 21.6453 8.50425L13.8818 20.355C12.9935 21.7111 11.006 21.7111 10.1176 20.355L2.35416 8.50425C1.75746 7.59338 1.87527 6.30964 2.82081 5.60434ZM20.2818 6.80669C15.4883 3.23111 8.51113 3.2311 3.71767 6.80668C3.47916 6.98459 3.39614 7.3575 3.6089 7.68227L4.4518 8.96895C8.75759 5.51008 15.2417 5.51035 19.5471 8.96976L20.3906 7.68227C20.6033 7.3575 20.5203 6.9846 20.2818 6.80669ZM11.3724 19.5331C11.6685 19.9851 12.331 19.9851 12.6271 19.5331L18.7207 10.2313C14.9279 7.08983 9.07135 7.08956 5.27825 10.2305L11.3724 19.5331Z"
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
export class SiPizza2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
