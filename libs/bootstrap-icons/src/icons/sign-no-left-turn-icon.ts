import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sign-no-left-turn-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m3.416 5.29 5.988-5.987c.362.274.596.708.596 1.197V11h1V8.5c0-.765-.344-1.45-.885-1.908l3.176-3.176a7 7 0 0 1-9.874 9.874Zm-.707-.706a7 7 0 0 1 9.874-9.874L9.196 6.097A2.5 2.5 0 0 0 8.5 6H7V4.534a.25.25 0 0 0-.41-.192L4.23 6.308a.25.25 0 0 0 0 .384l2.36 1.966.026.02zM8.293 7 7 8.293V7z"
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
export class SiSignNoLeftTurnIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('16');

  readonly height = input<string | number>('16');

  readonly viewBox = input<string>('0 0 16 16');

  readonly fill = input<string>('currentColor');
}
