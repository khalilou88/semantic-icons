import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-fort-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 4v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v2.17c0 .53.21 1.04.59 1.41L15 9v1H9V9l1.41-1.41c.38-.38.59-.89.59-1.42V4c0-.55-.45-1-1-1s-1 .45-1 1v1H7V4c0-.55-.45-1-1-1s-1 .45-1 1v1H3V4c0-.55-.45-1-1-1s-1 .45-1 1v2.17c0 .53.21 1.04.59 1.42L3 9v6l-1.41 1.41c-.38.38-.59.89-.59 1.42V19c0 1.1.9 2 2 2h7v-2.89c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 14 18v3h7c1.1 0 2-.9 2-2v-1.17c0-.53-.21-1.04-.59-1.41L21 15V9l1.41-1.41c.38-.38.59-.89.59-1.42V4c0-.55-.45-1-1-1s-1 .45-1 1z"
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
export class SiFortIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
