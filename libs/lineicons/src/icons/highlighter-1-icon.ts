import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-highlighter-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.2277 17.7884C11.0288 17.7884 10.838 17.7093 10.6974 17.5687L10.5208 17.3921L8.92999 18.9829C8.43153 19.4814 7.7072 19.6163 7.08648 19.3876C7.05762 19.4326 7.02381 19.4748 6.98541 19.5132L6.62159 19.877C6.44318 20.0554 6.18701 20.1322 5.93989 20.0812L3.59474 19.598C3.3246 19.5423 3.10682 19.3429 3.02766 19.0786C2.94851 18.8144 3.02075 18.5281 3.21578 18.3331L4.51053 17.0383C4.54946 16.9994 4.59159 16.9656 4.63609 16.9371C4.40758 16.3164 4.54252 15.5922 5.0409 15.0938L6.63171 13.503L6.45474 13.326C6.16185 13.0332 6.16185 12.5583 6.45474 12.2654L14.94 3.7801C15.8187 2.90142 17.2433 2.90142 18.122 3.7801L20.2433 5.90142C21.122 6.7801 21.122 8.20472 20.2433 9.0834L11.758 17.5687C11.6174 17.7093 11.4266 17.7884 11.2277 17.7884ZM9.46014 16.3314L7.69237 14.5637L6.10156 16.1545C6.00393 16.2521 6.00393 16.4104 6.10156 16.508L7.51578 17.9223C7.61341 18.0199 7.7717 18.0199 7.86933 17.9223L9.46014 16.3314ZM11.0513 15.8009L11.065 15.8149L11.2277 15.9777L19.1827 8.02274C19.4756 7.72985 19.4756 7.25498 19.1827 6.96208L17.0613 4.84076C16.7684 4.54787 16.2936 4.54787 16.0007 4.84076L8.04573 12.7957L8.20876 12.9587L8.22288 12.9725L11.0513 15.8009Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHighlighter1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
