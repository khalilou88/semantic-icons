import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-cake-candles-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M5 17.4302V15h4.33332M5 17.4302V21h14v-6h-4.3333M5 17.4302c.38672.3365.923.5698 1.66666.5698 2.66664 0 2.66666-3 2.66666-3m5.33338 0H9.33332m5.33338 0s0 3-2.6667 3c-2.66668 0-2.66668-3-2.66668-3m5.33338 0s0 3 2.6666 3c.7437 0 1.28-.2333 1.6667-.5698m-7-9.43017c.1093 0 2-1.11929 2-2.5s-1.9079-2.5-2-2.5c-.0921 0-2 1.11929-2 2.5s1.8947 2.5 2 2.5Zm0 0V11m-6 0v4h12v-4H6Z"
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
export class SiCakeCandlesIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
