import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-shields-dot-io-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Shields.io</svg:title>
    <svg:path
      d="M19 0a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H5l-.257-.007A5 5 0 0 1 0 19V5a5 5 0 0 1 5-5zm-7 21h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-7z"
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
export class SiShieldsDotIoIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
