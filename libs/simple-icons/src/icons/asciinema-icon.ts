import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-asciinema-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>asciinema</svg:title>
    <svg:path
      d="M1.61 0V24L22.39 12L1.61 0M5.76 7.2L10.06 9.68L5.76 12.16V7.2M12.55 11.12L14.08 12L5.76 16.8V15.04L12.55 11.12Z"
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
export class SiAsciinemaIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#D40000');
}
