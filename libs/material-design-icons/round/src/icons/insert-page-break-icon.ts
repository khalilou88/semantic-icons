import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-insert-page-break-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2v-3H4v3zM19.41 7.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H6c-1.1 0-1.99.89-1.99 1.99V11H20V8.83c0-.53-.21-1.04-.59-1.42zM13 8V3.5L18.5 9H14c-.55 0-1-.45-1-1zm2 6c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1zm2 0c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1zM6 13H2c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1z"
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
export class SiInsertPageBreakIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
