import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-microscope-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m17.9646 5.49185.3705.37054c.3906.39052 1.0237.39052 1.4142 0 .3906-.39053.3906-1.02369 0-1.41422L17.594 2.29283c-.3905-.39052-1.0237-.39052-1.4142 0-.3905.39053-.3905 1.02369 0 1.41422l.3706.37059-.7412.74118-.3706-.37059c-.3905-.39053-1.0237-.39053-1.4142 0L9.71372 8.75891c-.39053.39053-.39053 1.02369 0 1.41419l.34948.3495-.77031.7703c-.39053.3905-.39053 1.0237 0 1.4142.39052.3905 1.02371.3905 1.41421 0l.7703-.7703.3917.3917c.3905.3905 1.0236.3905 1.4142 0l2.0628-2.0629c.4145.6745.6539 1.4706.6539 2.3256 0 2.4448-1.9584 4.4087-4.3521 4.4087-1.0458 0-2.00787-.3737-2.76051-.9999H11c.5523 0 1-.4477 1-1s-.4477-1-1-1H5c-.55228 0-1 .4477-1 1s.44772 1 1 1h1.26803C6.92225 17.0489 7.8715 17.8952 9 18.4182V20H5c-.55228 0-1 .4477-1 1s.44772 1 1 1h14c.5523 0 1-.4477 1-1s-.4477-1-1-1h-4v-1.9637c1.8034-1.1328 3-3.1517 3-5.4451 0-1.4061-.4498-2.70897-1.2126-3.76687l.8066-.80655c.3905-.39052.3905-1.02369 0-1.41421l-.3706-.37054.7412-.74118Z"
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
export class SiMicroscopeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
