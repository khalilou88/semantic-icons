import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-auto-graph-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.06 9.94 13 9.45a.5.5 0 0 1 0-.91l1.06-.49.49-1.05a.5.5 0 0 1 .91 0l.49 1.06 1.05.49a.5.5 0 0 1 0 .91l-1.06.49-.49 1.05a.5.5 0 0 1-.91 0l-.48-1.06zM4.45 13l.49-1.06L6 11.45a.5.5 0 0 0 0-.91l-1.06-.49L4.45 9a.492.492 0 0 0-.9 0l-.49 1.06-1.06.49a.5.5 0 0 0 0 .91l1.06.49.49 1.05c.17.39.73.39.9 0zm4.51-5.01.63-1.4 1.4-.63a.5.5 0 0 0 0-.91l-1.4-.63-.63-1.4a.5.5 0 0 0-.91 0l-.63 1.4-1.4.63a.5.5 0 0 0 0 .91l1.4.63.63 1.4c.17.39.73.39.91 0zm13.38.28a1 1 0 0 0-1.45.04l-6.39 7.18-3.29-3.29a.996.996 0 0 0-1.41 0l-6.04 6.05c-.41.41-.41 1.09 0 1.5.41.41 1.09.41 1.5 0l5.25-5.26 3.25 3.25c.41.41 1.07.39 1.45-.04l7.17-8.07c.35-.39.33-.99-.04-1.36z"
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
export class SiAutoGraphIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
