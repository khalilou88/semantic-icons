import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-box-multiple-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M6 5.667a3.667 3.667 0 0 1 3.667 -3.667h8.666a3.667 3.667 0 0 1 3.667 3.667v8.666a3.667 3.667 0 0 1 -3.667 3.667h-8.666a3.667 3.667 0 0 1 -3.667 -3.667z"
    />
    <svg:path
      d="M2 9c0 -1.094 .533 -1.828 1.514 -2.374a1 1 0 1 1 .972 1.748c-.398 .221 -.486 .342 -.486 .626v10c0 .548 .452 1 1 1h9.998c.32 0 .618 -.154 .805 -.407l.065 -.1a1 1 0 1 1 1.738 .99a3 3 0 0 1 -2.606 1.517h-10c-1.652 0 -3 -1.348 -3 -3z"
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
export class SiBoxMultipleIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
