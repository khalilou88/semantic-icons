import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-dwm-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>dwm</svg:title>
    <svg:path
      d="M0 11h6V7h2v8h2v-4h2v4h2v-4h10v6h-2v-4h-2v4h-2v-4h-2v4H2v-2h4v-2H2v4H0z"
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
export class SiDwmIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#1177AA');
}
