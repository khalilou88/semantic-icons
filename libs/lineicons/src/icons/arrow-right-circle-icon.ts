import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-arrow-right-circle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.956 11.7488H8.88792C8.47371 11.7488 8.13792 12.0846 8.13792 12.4988C8.13792 12.913 8.47371 13.2488 8.88792 13.2488H13.9584L12.5864 14.6217C12.2936 14.9146 12.2937 15.3895 12.5867 15.6823C12.8797 15.9751 13.3546 15.975 13.6474 15.682L16.2855 13.0422C16.4291 12.9055 16.5186 12.7126 16.5186 12.4988C16.5186 12.2723 16.4182 12.0693 16.2595 11.9317L13.6474 9.31785C13.3546 9.02486 12.8797 9.02469 12.5867 9.31748C12.2937 9.61027 12.2936 10.0851 12.5864 10.3781L13.956 11.7488Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.32812 12.4991C2.32812 6.97668 6.80541 2.5 12.3277 2.5C17.85 2.5 22.3273 6.97668 22.3273 12.4991C22.3273 18.0214 17.85 22.4981 12.3277 22.4981C6.80541 22.4981 2.32812 18.0214 2.32812 12.4991ZM12.3277 4C7.63373 4 3.82812 7.80521 3.82812 12.4991C3.82812 17.1929 7.63373 20.9981 12.3277 20.9981C17.0216 20.9981 20.8273 17.1929 20.8273 12.4991C20.8273 7.80521 17.0216 4 12.3277 4Z"
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
export class SiArrowRightCircleIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
