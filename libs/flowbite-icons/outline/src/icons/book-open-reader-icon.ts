import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-book-open-reader-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12.1429 11v9m0-9c-2.50543-.7107-3.19099-1.39543-6.13657-1.34968-.48057.00746-.86348.38718-.86348.84968v7.2884c0 .4824.41455.8682.91584.8617 2.77491-.0362 3.45995.6561 6.08421 1.3499m0-9c2.5053-.7107 3.1067-1.39542 6.0523-1.34968.4806.00746.9477.38718.9477.84968v7.2884c0 .4824-.4988.8682-1 .8617-2.775-.0362-3.3758.6561-6 1.3499m2-14c0 1.10457-.8955 2-2 2-1.1046 0-2-.89543-2-2s.8954-2 2-2c1.1045 0 2 .89543 2 2Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBookOpenReaderIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
