import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-expand-height-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18 2H6V4H18V2ZM16.9497 9.44975L12 4.5L7.05273 9.44727L11 9.44826V14.5501L7.05078 14.55L12.0005 19.5L16.9502 14.5503L13 14.5502V9.44876L16.9497 9.44975ZM18 20V22H6V20H18Z"
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
export class SiExpandHeightFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
