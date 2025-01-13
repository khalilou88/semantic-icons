import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-kdeplasma-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>KDE Plasma</svg:title>
    <svg:path
      d="M6 0c-.831 0-1.5.669-1.5 1.5S5.169 3 6 3s1.5-.669 1.5-1.5S6.831 0 6 0m10.5 0-3 3L18 7.5 13.5 12l3 3 4.5-4.5 3-3zM2.25 9A2.245 2.245 0 0 0 0 11.25a2.245 2.245 0 0 0 2.25 2.25 2.245 2.245 0 0 0 2.25-2.25A2.245 2.245 0 0 0 2.25 9M9 18c-1.662 0-3 1.338-3 3s1.338 3 3 3 3-1.338 3-3-1.338-3-3-3"
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
export class SiKdeplasmaIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#1D99F3');
}
