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
      d="M4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2v-3H4v3zM20 8l-6-6H6c-1.1 0-1.99.9-1.99 2v7H20V8zm-7 1V3.5L18.5 9H13zm-4 4h6v2H9zm8 0h6v2h-6zM1 13h6v2H1z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiInsertPageBreakIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
