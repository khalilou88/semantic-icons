import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-shirt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M256 96c33.08 0 60.71-25.78 64-58 .3-3-3-6-6-6a13 13 0 00-4.74.9c-.2.08-21.1 8.1-53.26 8.1s-53.1-8-53.26-8.1a16.21 16.21 0 00-5.3-.9h-.06a5.69 5.69 0 00-5.38 6c3.35 32.16 31 58 64 58z"
    />
    <svg:path
      d="M485.29 89.9L356 44.64a4 4 0 00-5.27 3.16 96 96 0 01-189.38 0 4 4 0 00-5.35-3.16L26.71 89.9A16 16 0 0016.28 108l16.63 88a16 16 0 0013.92 12.9l48.88 5.52a8 8 0 017.1 8.19l-7.33 240.9a16 16 0 009.1 14.94A17.49 17.49 0 00112 480h288a17.49 17.49 0 007.42-1.55 16 16 0 009.1-14.94l-7.33-240.9a8 8 0 017.1-8.19l48.88-5.52a16 16 0 0013.92-12.9l16.63-88a16 16 0 00-10.43-18.1z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiShirtIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
