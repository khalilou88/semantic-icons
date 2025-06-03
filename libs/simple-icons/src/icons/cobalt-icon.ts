import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cobalt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>cobalt</svg:title>
    <svg:path
      d="M0 4.363v2.778l9.475 5.152L0 16.859v2.778l12.857-6.418V11.49zm11.143 0v2.778l9.474 5.152-9.474 4.566v2.778L24 13.219V11.49z"
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
export class SiCobaltIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FFFFFF');
}
