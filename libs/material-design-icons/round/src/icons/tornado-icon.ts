import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tornado-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m20.11 8 1.16-2c.77-1.33-.19-3-1.73-3H4.47c-1.54 0-2.5 1.67-1.73 3L3.9 8h16.21zM7.95 15l2.32 4.01c.77 1.33 2.69 1.33 3.46 0L16.05 15h-8.1zm11-5H5.05l1.74 3h10.42z"
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
export class SiTornadoIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
