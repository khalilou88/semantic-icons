import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-airline-seat-flat-angled-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m22.25 14.29-.69 1.89L9.2 11.71l1.39-3.79a2.007 2.007 0 0 1 2.56-1.19l6.69 2.41a4 4 0 0 1 2.41 5.15zm-19.8-1.81 5.55 2V18c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-.63l3.58 1.29c.52.19 1.1-.08 1.29-.6.19-.52-.08-1.1-.6-1.29L3.13 10.59c-.52-.19-1.1.08-1.29.6-.18.52.09 1.1.61 1.29zM7.3 10.2a3.01 3.01 0 0 0 1.41-4A3.005 3.005 0 0 0 4.7 4.8a2.99 2.99 0 0 0-1.4 4 2.99 2.99 0 0 0 4 1.4z"
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
export class SiAirlineSeatFlatAngledIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
