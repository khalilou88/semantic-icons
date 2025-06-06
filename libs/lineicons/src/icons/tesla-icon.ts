import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tesla-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21.3339 5.11871C18.0359 3.65884 14.8143 3.19476 11.9997 3.21662H11.9993C9.18457 3.19476 5.96241 3.65884 2.66505 5.11871C2.27214 4.39547 2.11133 3.95682 2.11133 3.95682C5.71603 2.50827 9.09208 2.01244 11.9993 2C14.9066 2.01244 18.2828 2.50819 21.888 3.95682C21.888 3.95682 21.7747 4.31293 21.3339 5.11871ZM14.7675 6.19664L12.0008 22L9.21173 6.19435C6.59227 6.19623 5.76146 6.48993 5.64063 7.68882C5.64063 7.68882 3.87083 7.01888 2.97935 5.65825C6.46076 4.01961 9.9593 3.94563 9.9593 3.94563L11.9986 6.46831L14.0376 3.94603C14.0376 3.94603 17.5361 4.01993 21.018 5.65857C20.1257 7.0192 18.3566 7.68914 18.3566 7.68914C18.2365 6.49034 17.4047 6.19664 14.7675 6.19664Z"
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
export class SiTeslaIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
