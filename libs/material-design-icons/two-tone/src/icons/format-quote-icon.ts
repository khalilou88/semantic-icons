import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-format-quote-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.62 16h.76L19 12.76V8h-4v4h3.62zm-10 0h.76L9 12.76V8H5v4h3.62z"
      opacity=".3"
    />
    <svg:path
      d="M18.62 18 21 13.24V6h-8v8h2.38l-2 4h5.24zM15 12V8h4v4.76L17.38 16h-.76l2-4H15zM3.38 18h5.24L11 13.24V6H3v8h2.38l-2 4zM5 12V8h4v4.76L7.38 16h-.76l2-4H5z"
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
export class SiFormatQuoteIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
