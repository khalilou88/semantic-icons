import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-breakfast-dining-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18 5H6c-1.1 0-2 .9-2 2 0 .71.38 1.35 1.01 1.73l.99.58V19h12V9.3l1-.58c.63-.36 1-1.01 1-1.72 0-1.1-.9-2-2-2zm-2.29 8.7-3 3c-.2.2-.45.3-.71.3s-.51-.1-.71-.29l-3-3a.996.996 0 0 1 0-1.41l3-3c.2-.2.45-.3.71-.3s.51.1.71.29l3 3c.39.39.39 1.02 0 1.41z"
      opacity=".3"
    />
    <svg:path
      d="M18 3H6C3.79 3 2 4.79 2 7c0 1.48.81 2.75 2 3.45V19c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.55c1.19-.69 2-1.97 2-3.45 0-2.21-1.79-4-4-4zm1 5.72-1 .58V19H6V9.31l-.99-.58C4.38 8.35 4 7.71 4 7c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2 0 .71-.38 1.36-1 1.72z"
    />
    <svg:path
      d="M12.71 9.29C12.51 9.1 12.26 9 12 9s-.51.1-.71.29l-3 3a.996.996 0 0 0 0 1.41l3 3c.2.2.45.3.71.3s.51-.1.71-.29l3-3a.996.996 0 0 0 0-1.41l-3-3.01zM12 14.58 10.41 13 12 11.41 13.59 13 12 14.58z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBreakfastDiningIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
