import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-liquor-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 14c0 1.3.84 2.4 2 2.82V20H4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H7v-3.18C8.16 16.4 9 15.3 9 14V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v7zm2-6h2v3H5V8zm15.64.54-.96-.32a1 1 0 0 1-.68-.95V3c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4.28a1 1 0 0 1-.68.95l-.96.32c-.81.28-1.36 1.04-1.36 1.9V20c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-9.56c0-.86-.55-1.62-1.36-1.9zM16 4h1v1h-1V4zm-3 6.44.95-.32C15.18 9.72 16 8.57 16 7.28V7h1v.28a3 3 0 0 0 2.05 2.85l.95.31V12h-7v-1.56zM20 20h-7v-2h7v2z"
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
export class SiLiquorIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
