import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-no-encryption-gmailerrorred-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2h-4.66l2 2H18v5.56l2 2V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5-2.32 0-4.26 1.59-4.82 3.74L8.9 6.46V6zM4.41 4.81 3 6.22l2.04 2.04C4.42 8.6 4 9.25 4 10v10c0 1.1.9 2 2 2h12.78l1 1 1.41-1.41L4.41 4.81zM6 20V10h.78l10 10H6z"
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
export class SiNoEncryptionGmailerrorredIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
