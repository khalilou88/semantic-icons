import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-forward-end-mini-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 6C20.4477 6 20 6.44771 20 7V17C20 17.5523 20.4477 18 21 18C21.5523 18 22 17.5523 22 17V7C22 6.44772 21.5523 6 21 6ZM4 9.85977L7.03189 11.9999L4 14.1401V9.85977ZM2.5 17.535C2.60326 17.535 2.70398 17.503 2.78834 17.4434L9.92131 12.4084C10.1469 12.2492 10.2007 11.9372 10.0415 11.7116C10.0086 11.665 9.96792 11.6243 9.92131 11.5914L2.78834 6.5564C2.56274 6.39715 2.25076 6.45094 2.09152 6.67654C2.03197 6.7609 2 6.86163 2 6.96488V17.035C2 17.3111 2.22386 17.535 2.5 17.535ZM16.0319 11.9999L13 14.1401V9.85977L16.0319 11.9999ZM11.0915 6.67654C11.032 6.7609 11 6.86163 11 6.96488V17.035C11 17.3111 11.2239 17.535 11.5 17.535C11.6033 17.535 11.704 17.503 11.7883 17.4434L18.9213 12.4084C19.1469 12.2492 19.2007 11.9372 19.0415 11.7116C19.0086 11.665 18.9679 11.6243 18.9213 11.5914L11.7883 6.5564C11.5627 6.39715 11.2508 6.45094 11.0915 6.67654Z"
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
export class SiForwardEndMiniLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
