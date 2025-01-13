import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-airline-seat-flat-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 11v2H9V9c0-1.1.9-2 2-2h7c2.21 0 4 1.79 4 4zM2 15c0 .55.45 1 1 1h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1zm5.14-2.9a3 3 0 0 0-.04-4.24 3 3 0 0 0-4.24.04 3 3 0 0 0 .04 4.24 3 3 0 0 0 4.24-.04z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAirlineSeatFlatIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
