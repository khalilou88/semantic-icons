import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-processing-foundation-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Processing Foundation</svg:title>
    <svg:path
      d="M11.999 0a12 12 0 100 24A12 12 0 0012 0zm1.183 5.255h.048c3.273 0 5.247 1.48 5.247 4.103 0 2.727-1.974 4.536-5.295 4.669v-1.742c1.837-.11 2.801-1.061 2.801-2.744 0-1.498-.957-2.442-2.8-2.516zm-1.773.026l.005 11.896c.779.052 1.583.18 2.26.337l-.269 1.324H6.788v-1.324a14.96 14.96 0 012.26-.337V6.993a14.71 14.71 0 01-2.26-.337V5.33h2.26c.64 0 1.469-.028 2.361-.05z"
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
export class SiProcessingFoundationIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#006699');
}
