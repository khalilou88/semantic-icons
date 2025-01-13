import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-portable-wifi-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.71 3.07a.996.996 0 0 0 0 1.41L4.1 5.87C2.79 7.57 2 9.69 2 12c0 3.3 1.6 6.22 4.06 8.04.48.35 1.16.21 1.46-.31.25-.43.14-.99-.26-1.29C5.29 16.98 4 14.65 4 12c0-1.76.57-3.38 1.53-4.69l1.43 1.44a5.97 5.97 0 0 0 1.1 7.76c.46.4 1.19.25 1.5-.28l.01-.01c.24-.42.13-.94-.23-1.26A3.947 3.947 0 0 1 8 12c0-.65.17-1.25.44-1.79l1.58 1.58L10 12c0 1.1.9 2 2 2l.21-.02 6.81 6.81a.996.996 0 1 0 1.41-1.41L4.13 3.07c-.39-.39-1.03-.39-1.42 0zm15 10.75c.18-.57.29-1.19.29-1.82 0-3.31-2.69-6-6-6-.63 0-1.25.11-1.82.29l1.72 1.72c.03 0 .06-.01.1-.01 2.21 0 4 1.79 4 4 0 .04-.01.07-.01.11l1.72 1.71zM12 4c4.42 0 8 3.58 8 8 0 1.2-.29 2.32-.77 3.35l1.49 1.49A9.82 9.82 0 0 0 22 12c0-5.52-4.48-10-10-10-1.76 0-3.4.48-4.84 1.28l1.48 1.48C9.66 4.28 10.8 4 12 4z"
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
export class SiPortableWifiOffIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
