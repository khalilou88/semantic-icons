import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-car-6-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7 12.125C6.58579 12.125 6.25 12.4608 6.25 12.875C6.25 13.2892 6.58579 13.625 7 13.625H8.5C8.91421 13.625 9.25 13.2892 9.25 12.875C9.25 12.4608 8.91421 12.125 8.5 12.125H7Z"
      fill="#323544"
    />
    <svg:path
      d="M14.75 12.875C14.75 12.4608 15.0858 12.125 15.5 12.125H17C17.4142 12.125 17.75 12.4608 17.75 12.875C17.75 13.2892 17.4142 13.625 17 13.625H15.5C15.0858 13.625 14.75 13.2892 14.75 12.875Z"
      fill="#323544"
    />
    <svg:path
      d="M7.69864 3.25C6.76042 3.25 5.92068 3.83218 5.59159 4.7108L3.70609 9.74479C2.96444 10.4299 2.5 11.4107 2.5 12.5V13.25C2.5 14.7877 3.42557 16.1093 4.75 16.688V18C4.75 18.8284 5.42157 19.5 6.25 19.5C7.07843 19.5 7.75 18.8284 7.75 18V17H16.25V18C16.25 18.8284 16.9216 19.5 17.75 19.5C18.5784 19.5 19.25 18.8284 19.25 18V16.688C20.5744 16.1093 21.5 14.7877 21.5 13.25V12.5C21.5 11.4101 21.0351 10.4289 20.2927 9.74369L18.4076 4.7108C18.0785 3.83218 17.2388 3.25 16.3006 3.25H7.69864ZM17.75 15.5H6.25C5.00736 15.5 4 14.4926 4 13.25V12.5C4 11.2574 5.00736 10.25 6.25 10.25H17.75C18.9926 10.25 20 11.2574 20 12.5V13.25C20 14.4926 18.9926 15.5 17.75 15.5ZM18.3358 8.79549C18.1449 8.76554 17.9493 8.75 17.75 8.75H6.25C6.05043 8.75 5.85451 8.76559 5.66337 8.79562L6.99629 5.23693C7.10598 4.94406 7.3859 4.75 7.69864 4.75H16.3006C16.6133 4.75 16.8932 4.94406 17.0029 5.23693L18.3358 8.79549Z"
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
export class SiCar6Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
