import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-lungs-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M12 3a1 1 0 0 1 1 1v5a2 2 0 0 0 1 1.732v-3.475c0 -1.242 .995 -2.257 2.233 -2.257c.372 0 .738 .094 1.122 .307l.18 .117c1.695 1.23 2.76 3.035 3.773 6.34q .674 2.204 .692 5.06c.016 2.195 -1.657 4.024 -3.843 4.168l-.237 .008c-2.17 0 -3.92 -1.787 -3.92 -3.98v-4.146a4 4 0 0 1 -1.893 -1.112l-.107 -.118l-.107 .118a4 4 0 0 1 -1.892 1.112l-.001 4.146c0 2.193 -1.75 3.98 -3.919 3.98l-.268 -.01c-2.155 -.142 -3.827 -1.971 -3.811 -4.165q .018 -2.858 .692 -5.06c1.011 -3.307 2.076 -5.112 3.822 -6.375l.188 -.117a2.2 2.2 0 0 1 1.064 -.273c1.237 0 2.232 1.015 2.232 2.257l.001 3.475a2 2 0 0 0 .999 -1.732v-5a1 1 0 0 1 1 -1"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLungsIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
