import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hive-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m21.5 9-2.25-4h-3.31l-1.69-3h-4.5L8.06 5H4.75L2.5 9l1.69 3-1.69 3 2.25 4h3.31l1.69 3h4.5l1.69-3h3.31l2.25-4-1.69-3 1.69-3zm-2.29 0-1.12 2h-2.14l-1.12-2 1.12-2h2.14l1.12 2zm-8.27 5-1.12-2 1.12-2h2.12l1.12 2-1.12 2h-2.12zm2.14-10 1.12 1.98L13.06 8h-2.12L9.8 5.98 10.92 4h2.16zM5.92 7h2.14l1.12 2-1.12 2H5.92L4.79 9l1.13-2zm-1.13 8 1.12-2h2.14l1.12 2-1.12 2H5.92l-1.13-2zm6.13 5L9.8 18.02 10.94 16h2.12l1.13 2.02L13.08 20h-2.16zm7.16-3h-2.14l-1.12-2 1.12-2h2.14l1.12 2-1.12 2z"
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
export class SiHiveIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
