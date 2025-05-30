import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-oracle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.49695 18.3251H15.8438C19.3362 18.2399 22.0833 15.3225 21.9981 11.8513C21.9129 8.46542 19.1871 5.76094 15.8438 5.67576H8.49695C5.00454 5.59058 2.08711 8.33765 2.00193 11.8301C1.91675 15.3225 4.66382 18.2186 8.15623 18.3038C8.2627 18.3251 8.36918 18.3251 8.49695 18.3251ZM15.6734 16.0891H8.64601C6.38873 16.0252 4.62123 14.1299 4.68512 11.8726C4.7703 9.72183 6.4952 7.97563 8.64601 7.91175H15.6734C17.9307 7.84786 19.826 9.61536 19.8899 11.8726C19.9537 14.1299 18.1862 16.0252 15.929 16.0891C15.8438 16.0891 15.7586 16.0891 15.6734 16.0891Z"
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
export class SiOracleIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
