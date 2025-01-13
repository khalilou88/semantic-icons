import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-menu-fold-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 17.9996V19.9996H3V17.9996H21ZM7 3.5V13.5L2 8.49955L7 3.5ZM21 10.9996V12.9996H12V10.9996H21ZM21 3.99955V5.99955H12V3.99955H21Z"
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
export class SiMenuFoldFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
