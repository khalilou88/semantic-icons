import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-plantscale-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.00001 12C2.00001 6.477 6.47701 2 12 2C16.0605 2 19.556 4.42 21.1225 7.897L7.89751 21.122C7.33283 20.8676 6.79301 20.5613 6.28501 20.207L14.492 12H12L4.92901 19.071C3.99909 18.1434 3.26162 17.0412 2.75897 15.8278C2.25631 14.6143 1.99839 13.3135 2.00001 12ZM21.9995 12.0035L12.003 22C17.523 21.998 21.998 17.5235 21.9995 12.0035Z"
      fill="#323544"
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
export class SiPlantscaleIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
