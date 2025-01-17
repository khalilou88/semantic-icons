import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-wheelchair-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.99837 10.3413L7.99793 12.5352C6.80239 13.2268 5.99805 14.5195 5.99805 16C5.99805 18.2091 7.78891 20 9.99805 20C11.4786 20 12.7712 19.1957 13.4628 18.0001L15.6565 18.0004C14.8327 20.3306 12.6103 22 9.99805 22C6.68434 22 3.99805 19.3137 3.99805 16C3.99805 13.3874 5.66782 11.1649 7.99837 10.3413ZM11.998 17C10.3412 17 8.99805 15.6569 8.99805 14V10C8.99805 8.95561 9.53172 8.03587 10.3412 7.49861C9.53172 6.96413 8.99805 6.04439 8.99805 5C8.99805 3.34315 10.3412 2 11.998 2C13.6549 2 14.998 3.34315 14.998 5C14.998 6.04439 14.4644 6.96413 13.6548 7.50139C14.4644 8.03587 14.998 8.95561 14.998 10V14.999L16.4319 15C17.0803 15 17.6849 15.3141 18.0584 15.8362L18.1468 15.971L20.8555 20.4855L19.1406 21.5145L16.4319 17L14.998 16.999L11.998 17ZM11.998 9C11.4458 9 10.998 9.44772 10.998 10V14C10.998 14.5523 11.4458 15 11.998 15H12.997L12.998 10C12.998 9.44772 12.5503 9 11.998 9ZM11.998 4C11.4458 4 10.998 4.44772 10.998 5C10.998 5.55228 11.4458 6 11.998 6C12.5503 6 12.998 5.55228 12.998 5C12.998 4.44772 12.5503 4 11.998 4Z"
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
export class SiWheelchairLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
