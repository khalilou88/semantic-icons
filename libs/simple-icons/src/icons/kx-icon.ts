import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-kx-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>KX</svg:title>
    <svg:path
      d="M0 5.873h3.59v12.254H0V5.873Zm11.746 0L7.65 12l4.097 6.127H7.65L3.59 12l4.06-6.127h4.097Zm12.254 0L19.903 12 24 18.127h-4.097l-2.03-3.045-2.03 3.045h-4.097L15.843 12l-4.097-6.127h4.097l2.03 3.082 2.03-3.082H24Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKxIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#101820');
}
