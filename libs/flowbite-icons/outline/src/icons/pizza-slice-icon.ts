import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pizza-slice-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:g clip-path="url(#a)">
      <svg:path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m10.4149 10.7623.0005.0109m3.0868 3.0764.0005.0108M8.91554 15.349l.00046.0108m-.8276-8.44549L4.39857 19.9133l12.95163-3.7371m-.8271-8.43475c2.0971 2.09707 3.269 4.77055 3.5172 7.51635.067.7413-.4619 1.3752-1.1869 1.5293-1.0146.2158-1.9613-.5811-2.0926-1.615-.2412-1.9-.9437-3.5721-2.52-5.1484-1.5779-1.57793-3.3173-2.3457-5.25302-2.61955-1.02139-.1445-1.79555-1.1099-1.5387-2.10314.17236-.66653.76818-1.14208 1.45754-1.08543 2.78088.22851 5.49388 1.40332 7.61648 3.52587Z"
      />
    </svg:g>
    <svg:defs>
      <svg:clipPath id="a">
        <svg:path fill="#fff" d="M0 0h24v24H0z" />
      </svg:clipPath>
    </svg:defs>
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
export class SiPizzaSliceIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
