import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-screen-search-desktop-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 18c1.1 0 1.99-.9 1.99-2L22 6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2H0v2h24v-2h-4ZM4 16V6h16v10.01L4 16Zm5.097-6.047c0-1.027.836-1.864 1.864-1.864 1.027 0 1.864.837 1.864 1.864a1.867 1.867 0 0 1-1.864 1.864 1.867 1.867 0 0 1-1.864-1.864Zm7.032 4.236-2.482-2.482a3.19 3.19 0 0 0 .527-1.754A3.216 3.216 0 0 0 10.96 6.74a3.217 3.217 0 0 0-3.214 3.213 3.218 3.218 0 0 0 3.214 3.214 3.19 3.19 0 0 0 1.724-.51l2.489 2.487.955-.955Z"
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
export class SiScreenSearchDesktopIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
