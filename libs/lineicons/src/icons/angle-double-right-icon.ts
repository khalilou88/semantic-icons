import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-angle-double-right-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.4228 18.2197C6.1299 18.5126 6.1299 18.9874 6.4228 19.2803C6.71569 19.5732 7.19056 19.5732 7.48346 19.2803L13.7335 13.0303C14.0263 12.7374 14.0263 12.2626 13.7335 11.9697L7.48346 5.71967C7.19056 5.42678 6.71569 5.42678 6.42279 5.71967C6.1299 6.01256 6.1299 6.48744 6.42279 6.78033L12.1425 12.5L6.4228 18.2197Z"
      fill="#323544"
    />
    <svg:path
      d="M10.9228 18.2197C10.6299 18.5126 10.6299 18.9874 10.9228 19.2803C11.2157 19.5732 11.6906 19.5732 11.9835 19.2803L18.2335 13.0303C18.5263 12.7374 18.5263 12.2626 18.2335 11.9697L11.9835 5.71967C11.6906 5.42678 11.2157 5.42678 10.9228 5.71967C10.6299 6.01256 10.6299 6.48744 10.9228 6.78033L16.6425 12.5L10.9228 18.2197Z"
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
export class SiAngleDoubleRightIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
