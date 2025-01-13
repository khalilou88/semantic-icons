import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wifi-find-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22.59 10.39 24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98L12 21l1.41-1.42L2.93 9.08C5.45 7.16 8.59 6 12 6c4.13 0 7.88 1.68 10.59 4.39z"
    />
    <svg:path
      d="m23 18.59-2.56-2.56c.35-.59.56-1.28.56-2.03 0-2.24-1.76-4-4-4s-4 1.76-4 4 1.76 4 4 4c.75 0 1.44-.21 2.03-.56L21.59 20 23 18.59zM15 14c0-1.12.88-2 2-2s2 .88 2 2-.88 2-2 2-2-.88-2-2z"
    />
    <svg:path
      d="M22.59 10.39A14.943 14.943 0 0 0 12 6C8.59 6 5.45 7.16 2.93 9.08l2.26 2.26 8.24 8.24.46-.46C12.15 18.09 11 16.21 11 14c0-1.62.62-3.13 1.75-4.25S15.38 8 17 8c2.21 0 4.09 1.15 5.13 2.89l.49-.49-.02-.02-.01.01z"
      opacity=".3"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWifiFindIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
