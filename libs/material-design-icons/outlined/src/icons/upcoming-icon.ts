import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-upcoming-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.6 10.81 16.19 9.4l3.56-3.55 1.41 1.41c-.11.03-3.56 3.55-3.56 3.55zM13 3h-2v5h2V3zm-6.6 7.81L7.81 9.4 4.26 5.84 2.84 7.26c.11.03 3.56 3.55 3.56 3.55zM20 14h-3.42c-.77 1.76-2.54 3-4.58 3s-3.81-1.24-4.58-3H4v5h16v-5m0-2c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-5c0-1.1.9-2 2-2h5c0 1.66 1.34 3 3 3s3-1.34 3-3h5z"
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
export class SiUpcomingIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
