import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mushroom-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.0234 2.5C6.46877 2.5 2.41634 7.78887 3.42906 12.9823C3.63215 14.0238 4.57915 14.6223 5.51285 14.6223H9.43693L8.95901 19.0049C8.81384 20.3362 9.85656 21.4988 11.1958 21.4988H12.8508C14.19 21.4988 15.2327 20.3362 15.0876 19.0049L14.6096 14.6223H18.534C19.4677 14.6223 20.4147 14.0238 20.6178 12.9823C21.6305 7.78887 17.5781 2.5 12.0234 2.5ZM13.8173 13.1223C13.7889 13.1206 13.7601 13.1206 13.731 13.1223H10.3156C10.2865 13.1206 10.2577 13.1206 10.2293 13.1223H5.51285C5.1657 13.1223 4.94339 12.9109 4.90133 12.6952C4.06149 8.38835 7.45232 4 12.0234 4C16.5945 4 19.9854 8.38835 19.1455 12.6952C19.1035 12.9109 18.8812 13.1223 18.534 13.1223H13.8173ZM10.9458 14.6223H13.1008L13.5964 19.1675C13.6448 19.6112 13.2972 19.9988 12.8508 19.9988H11.1958C10.7494 19.9988 10.4018 19.6112 10.4502 19.1675L10.9458 14.6223Z"
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
export class SiMushroom1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
