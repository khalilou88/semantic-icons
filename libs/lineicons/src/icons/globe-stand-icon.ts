import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-globe-stand-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.26737 2.10061C4.13994 4.48358 2.72578 9.7613 5.10875 13.8887C6.46845 16.2438 8.7706 17.7155 11.2638 18.1025C11.2542 18.1503 11.2492 18.1998 11.2492 18.2504V20.5004H7.24918C6.83496 20.5004 6.49918 20.8362 6.49918 21.2504C6.49918 21.6646 6.83496 22.0004 7.24918 22.0004H16.7492C17.1634 22.0004 17.4992 21.6646 17.4992 21.2504C17.4992 20.8362 17.1634 20.5004 16.7492 20.5004H12.7492V18.2504C12.7492 18.2347 12.7487 18.219 12.7477 18.2035C14.1604 18.1776 15.5866 17.8038 16.8969 17.0473C17.2556 16.8402 17.3785 16.3815 17.1714 16.0228C16.9643 15.6641 16.5056 15.5412 16.1469 15.7483C12.7369 17.7171 8.37654 16.5487 6.40779 13.1387C4.43903 9.72874 5.60738 5.3684 9.01737 3.39964C9.37609 3.19254 9.49899 2.73384 9.29188 2.37513C9.08478 2.01641 8.62609 1.8935 8.26737 2.10061Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.79287 4.74286C7.12429 6.28356 6.20997 9.69585 7.75067 12.3644C9.29138 15.033 12.7037 15.9473 15.3722 14.4066C18.0408 12.8659 18.9551 9.45363 17.4144 6.78505C15.8737 4.11648 12.4614 3.20216 9.79287 4.74286ZM9.04971 11.6144C7.92322 9.66329 8.59173 7.16839 10.5429 6.0419C12.494 4.91541 14.9889 5.58392 16.1154 7.53505C17.2419 9.48619 16.5734 11.9811 14.6222 13.1076C12.6711 14.2341 10.1762 13.5656 9.04971 11.6144Z"
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
export class SiGlobeStandIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
