import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-gmx-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>GMX</svg:title>
    <svg:path
      d="M3.904 11.571v1.501H5.46c-.075.845-.712 1.274-1.539 1.274-1.255 0-1.934-1.157-1.934-2.3 0-1.118.65-2.317 1.906-2.317.77 0 1.321.468 1.586 1.166l1.812-.76C6.66 8.765 5.489 8.086 3.979 8.086 1.614 8.087 0 9.654 0 12.037c0 2.309 1.604 3.876 3.913 3.876 1.227 0 2.308-.439 3.025-1.44.651-.916.731-1.831.75-2.904zM13.65 8.3l-1.586 3.95-1.5-3.95H8.67l-1.255 7.392h1.91l.619-4.257h.019l1.695 4.257h.765l1.775-4.257h.024l.538 4.257h1.92L15.562 8.3zm7.708 3.473 2.086-3.475h-2.128l-1.11 1.767L19.012 8.3H16.68l2.459 3.47-2.46 3.922h2.333l1.33-2.223 1.576 2.223H24l-2.642-3.92"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGmxIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#1C449B');
}
