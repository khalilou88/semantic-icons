import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-chevron-down-circle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.60845 10.2197C9.31556 9.92678 8.84069 9.92678 8.54779 10.2197C8.2549 10.5126 8.2549 10.9874 8.54779 11.2803L11.7978 14.5303C12.0907 14.8232 12.5656 14.8232 12.8585 14.5303L16.1085 11.2803C16.4013 10.9874 16.4013 10.5126 16.1085 10.2197C15.8156 9.92678 15.3407 9.92678 15.0478 10.2197L12.3281 12.9393L9.60845 10.2197Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.3281 2C6.80528 2 2.32812 6.47715 2.32812 12C2.32812 17.5228 6.80528 22 12.3281 22C17.851 22 22.3281 17.5228 22.3281 12C22.3281 6.47715 17.851 2 12.3281 2ZM3.82812 12C3.82812 7.30558 7.6337 3.5 12.3281 3.5C17.0225 3.5 20.8281 7.30558 20.8281 12C20.8281 16.6944 17.0225 20.5 12.3281 20.5C7.6337 20.5 3.82812 16.6944 3.82812 12Z"
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
export class SiChevronDownCircleIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
