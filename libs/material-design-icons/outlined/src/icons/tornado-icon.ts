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
      d="M23 3H1l11 19L23 3zm-3.47 2-1.74 3H6.21L4.47 5h15.06zm-9.27 10h3.48L12 18.01 10.26 15zm4.64-2H9.1l-1.74-3h9.27l-1.73 3z"
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
export class SiTornadoIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
