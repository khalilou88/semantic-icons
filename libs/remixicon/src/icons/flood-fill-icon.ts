import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-flood-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.0001 17.4723C17.0616 18.4223 18.4634 19 20 19H22V21H20C18.5428 21 17.1766 20.6104 15.9998 19.9296C14.8242 20.6101 13.4576 21 12 21C10.5428 21 9.17657 20.6104 7.99984 19.9296C6.8242 20.6101 5.45763 21 4 21H2V19H4C5.53713 19 6.93925 18.422 8.00013 17.4723C9.06163 18.4223 10.4634 19 12 19C13.5371 19 14.9393 18.422 16.0001 17.4723ZM12.5734 1.53204L12.6727 1.6115L23 11H20V17C18.3643 17 16.912 16.2145 15.9998 15.0002C15.088 16.2145 13.6357 17 12 17C10.3643 17 8.91199 16.2145 7.99978 15.0002C7.08801 16.2145 5.63573 17 4 17L3.999 10.9994L1 11L11.3273 1.6115C11.6452 1.32254 12.1027 1.27439 12.4671 1.46702L12.5734 1.53204Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFloodFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
