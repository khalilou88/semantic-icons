import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-paddle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.02637 9.29425V8.58675C4.89299 8.58653 5.72403 8.24219 6.33684 7.62941C6.94962 7.01659 7.29397 6.18553 7.29419 5.31891H7.94822C7.94772 5.74844 8.03184 6.17381 8.19584 6.57078C8.35981 6.96775 8.60044 7.32853 8.9039 7.63244C9.2074 7.93637 9.56781 8.1775 9.96453 8.34206C10.3613 8.50659 10.7865 8.59137 11.2161 8.59147V9.29897C10.3494 9.29916 9.51837 9.64353 8.90559 10.2563C8.29278 10.8691 7.94844 11.7002 7.94822 12.5668H7.29419C7.29472 12.1373 7.21056 11.7119 7.04659 11.3149C6.88259 10.9179 6.642 10.5572 6.3385 10.2533C6.03503 9.94934 5.67459 9.70819 5.27787 9.54366C4.88115 9.37909 4.45587 9.29434 4.02637 9.29425ZM7.29419 4.09182H12.9148C15.6599 4.09182 17.6212 6.05234 17.6212 8.92869C17.6212 11.805 15.6607 13.7648 12.9148 13.7648H7.29419V22H9.647V15.8566H12.9148C16.8626 15.8566 19.974 12.7452 19.974 8.92869C19.974 5.11218 16.8626 2 12.9148 2H7.29419V4.09182Z"
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
export class SiPaddleIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
