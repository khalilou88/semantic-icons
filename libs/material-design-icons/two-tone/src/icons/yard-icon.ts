import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-yard-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 20h16V4H4v16zM8 8.22a1.562 1.562 0 0 1 2.45-1.28l-.01-.12c0-.86.7-1.56 1.56-1.56s1.56.7 1.56 1.56l-.01.12A1.562 1.562 0 0 1 16 8.22c0 .62-.37 1.16-.89 1.4.52.25.89.79.89 1.41 0 .86-.7 1.56-1.56 1.56-.33 0-.64-.11-.89-.28l.01.12c0 .86-.7 1.56-1.56 1.56s-1.56-.7-1.56-1.56l.01-.12A1.562 1.562 0 0 1 8 11.03c0-.62.37-1.16.89-1.4C8.37 9.38 8 8.84 8 8.22zM12 19c0-3.31 2.69-6 6-6 0 3.31-2.69 6-6 6s-6-2.69-6-6c3.31 0 6 2.69 6 6z"
      opacity=".3"
    />
    <svg:path
      d="M8 11.03a1.562 1.562 0 0 0 2.45 1.28l-.01.12c0 .86.7 1.56 1.56 1.56s1.56-.7 1.56-1.56l-.01-.12c.25.17.56.28.89.28.86 0 1.56-.7 1.56-1.56 0-.62-.37-1.16-.89-1.41.52-.24.89-.78.89-1.4a1.562 1.562 0 0 0-2.45-1.28l.01-.12c0-.86-.7-1.56-1.56-1.56s-1.56.7-1.56 1.56l.01.12A1.562 1.562 0 0 0 8 8.22c0 .62.37 1.16.89 1.41-.52.24-.89.78-.89 1.4zm4-2.97c.86 0 1.56.7 1.56 1.56s-.7 1.56-1.56 1.56-1.56-.7-1.56-1.56.7-1.56 1.56-1.56zM18 13c-3.31 0-6 2.69-6 6 3.31 0 6-2.69 6-6zm-6 6c0-3.31-2.69-6-6-6 0 3.31 2.69 6 6 6z"
    />
    <svg:path
      d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z"
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
export class SiYardIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
