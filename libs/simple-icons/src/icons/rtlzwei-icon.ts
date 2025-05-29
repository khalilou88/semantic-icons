import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-rtlzwei-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>RTLZWEI</svg:title>
    <svg:path
      d="M0 0v24h7.38v-3.69H3.692L3.69 3.69h9.229V0H0zm16.61 0v3.69h3.7v16.62h-9.238V24H24V0h-7.39zm-.003 6.49l-3.689.717v9.227l3.69-.715V6.49zm-5.535 1.076l-3.69.715v9.229l3.69-.717V7.566z"
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
export class SiRtlzweiIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#00BCF6');
}
