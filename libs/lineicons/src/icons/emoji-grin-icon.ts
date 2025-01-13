import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-emoji-grin-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.0001 9.23256C10.0001 8.5422 9.44042 7.98256 8.75007 7.98256C8.05971 7.98256 7.50007 8.5422 7.50007 9.23256C7.50007 9.92291 8.05971 10.4827 8.75007 10.4827C9.44042 10.4827 10.0001 9.92291 10.0001 9.23256Z"
      fill="#323544"
    />
    <svg:path
      d="M15.2499 7.98256C15.9403 7.98256 16.4999 8.5422 16.4999 9.23256C16.4999 9.92291 15.9403 10.4827 15.2499 10.4827C14.5596 10.4827 13.9999 9.92301 13.9999 9.23266C13.9999 8.5423 14.5596 7.98256 15.2499 7.98256Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.81677 13.061C6.60496 13.061 6.40303 13.1506 6.26085 13.3076C6.11868 13.4646 6.04951 13.6744 6.07044 13.8852C6.31055 16.3031 8.52909 18.7732 12 18.7732C15.4709 18.7732 17.6894 16.3031 17.9296 13.8852C17.9505 13.6744 17.8814 13.4646 17.7392 13.3076C17.597 13.1506 17.3951 13.061 17.1833 13.061H6.81677ZM12 17.2732C9.74177 17.2732 8.27458 15.9551 7.75717 14.561H16.2428C15.7254 15.9551 14.2583 17.2732 12 17.2732Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z"
      fill="#323544"
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
export class SiEmojiGrinIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
