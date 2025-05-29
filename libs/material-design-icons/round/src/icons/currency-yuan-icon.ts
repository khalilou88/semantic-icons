import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-currency-yuan-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 21c-.55 0-1-.45-1-1v-6H7c-.55 0-1-.45-1-1s.45-1 1-1h3.72L5.98 4.54A.998.998 0 0 1 6.82 3c.34 0 .66.17.84.46L12 10.29l4.34-6.83c.18-.29.5-.46.84-.46.79 0 1.27.87.84 1.54L13.28 12H17c.55 0 1 .45 1 1s-.45 1-1 1h-4v6c0 .55-.45 1-1 1z"
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
export class SiCurrencyYuanIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
