import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-menu-unfold-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 17.9996V19.9996H3V17.9996H21ZM17 3.5L22 8.49955L17 13.5V3.5ZM12 10.9996V12.9996H3V10.9996H12ZM12 3.99955V5.99955H3V3.99955H12Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMenuUnfoldFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
