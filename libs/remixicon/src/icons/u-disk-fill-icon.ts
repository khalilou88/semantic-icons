import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-u-disk-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 12H20C20.5523 12 21 12.4477 21 13V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V13C3 12.4477 3.44772 12 4 12ZM5 2H19V10H5V2ZM9 5V7H11V5H9ZM13 5V7H15V5H13Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiUDiskFillIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
