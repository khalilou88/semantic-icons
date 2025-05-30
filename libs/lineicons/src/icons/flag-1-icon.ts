import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-flag-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.27344 3.41016C6.27344 2.99594 5.93765 2.66016 5.52344 2.66016C5.10922 2.66016 4.77344 2.99594 4.77344 3.41016V21.9102C4.77344 22.3244 5.10922 22.6602 5.52344 22.6602C5.93765 22.6602 6.27344 22.3244 6.27344 21.9102V15.9102H19.0234C19.2779 15.9102 19.5151 15.7811 19.6533 15.5674C19.7914 15.3537 19.8118 15.0845 19.7074 14.8524L17.7344 10.4679C17.6463 10.2722 17.6463 10.0481 17.7344 9.85238L19.7074 5.46793C19.8118 5.23585 19.7914 4.96664 19.6533 4.75293C19.5151 4.53921 19.2779 4.41016 19.0234 4.41016H6.27344V3.41016ZM6.27344 5.91016H17.8635L16.3665 9.23684C16.1023 9.82403 16.1023 10.4963 16.3665 11.0835L17.8635 14.4102H6.27344V5.91016Z"
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
export class SiFlag1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
