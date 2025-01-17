import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-speed-mini-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.03189 11.9999L6 9.85977V14.1401L9.03189 11.9999ZM4.78834 17.4434C4.70398 17.503 4.60326 17.535 4.5 17.535C4.22386 17.535 4 17.3111 4 17.035V6.96488C4 6.86163 4.03197 6.7609 4.09152 6.67654C4.25076 6.45094 4.56274 6.39715 4.78834 6.5564L11.9213 11.5914C11.9679 11.6243 12.0086 11.665 12.0415 11.7116C12.2007 11.9372 12.1469 12.2492 11.9213 12.4084L4.78834 17.4434ZM15 14.1401L18.0319 11.9999L15 9.85977V14.1401ZM13 6.96488C13 6.86163 13.032 6.7609 13.0915 6.67654C13.2508 6.45094 13.5627 6.39715 13.7883 6.5564L20.9213 11.5914C20.9679 11.6243 21.0086 11.665 21.0415 11.7116C21.2007 11.9372 21.1469 12.2492 20.9213 12.4084L13.7883 17.4434C13.704 17.503 13.6033 17.535 13.5 17.535C13.2239 17.535 13 17.3111 13 17.035V6.96488Z"
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
export class SiSpeedMiniLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
