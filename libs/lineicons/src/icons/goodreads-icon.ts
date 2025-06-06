import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-goodreads-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.16703 17.7682H6.29602C6.81195 17.7682 7.29564 17.7682 7.81157 17.7682C7.84382 17.7682 7.94056 17.736 7.94056 17.865C8.19852 19.2193 9.13365 19.9932 10.3912 20.3801C11.4231 20.7026 12.5195 20.7026 13.5836 20.4124C14.9057 20.1544 15.7763 19.316 16.2277 18.0584C16.5502 17.1878 16.6469 16.3172 16.6792 15.4788C16.6792 15.253 16.6792 13.6085 16.6792 13.4473H16.6469C16.6147 13.4795 16.6147 13.5763 16.5502 13.6408C15.6796 15.3175 14.1318 16.2849 12.4227 16.3172C8.35975 16.4139 5.74784 14.06 5.6511 9.41655C5.61886 8.44917 5.68335 7.54629 5.97356 6.67565C6.74746 3.87026 8.84344 2.03225 11.9713 2C14.3575 2 15.9375 3.51556 16.518 4.77314C16.5502 4.80539 16.5502 4.86988 16.6147 4.80539V2.4192H18.356C18.356 13.3828 18.356 15.382 18.356 15.382C18.356 18.4131 17.3241 21.0251 14.3252 21.7345C11.6488 22.3794 8.13403 21.9279 6.68297 19.5095C6.36051 18.9613 6.19928 18.3809 6.16703 17.7682ZM11.9068 3.41882C9.87531 3.38657 7.6181 4.99886 7.39238 8.64265C7.26339 10.9643 7.9728 13.415 10.1655 14.4469C11.2619 14.9628 13.0676 15.0273 14.3897 14.0922C16.26 12.7701 16.8404 10.3194 16.518 8.02998C16.1633 5.32132 14.6799 3.41882 11.9068 3.41882Z"
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
export class SiGoodreadsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
