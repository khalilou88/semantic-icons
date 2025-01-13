import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-xing-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.4443 3.5L13.8099 14.9901L17.8573 22H15.5473L11.5021 14.9914L11.5003 14.9904L18.1343 3.5H20.4443ZM8.31033 7L10.7324 11.1962L10.7305 11.1973L7.66933 16.5H5.36133L8.42215 11.1951L6.00133 7H8.31033Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiXingLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
