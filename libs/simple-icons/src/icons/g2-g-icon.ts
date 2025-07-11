import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-g-2-g-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>G2G</svg:title>
    <svg:path
      d="M0 0v4.357h19.643v6.43H24V0H0zm0 6.44V24h24V12.805H6.648v4.36h12.995v2.478H4.357v-8.846h12.995V6.439H0z"
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
export class SiG2GIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#ED1C24');
}
