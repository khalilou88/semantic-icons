import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-payment-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M22 4H2v16h20V4zm-2 14H4v-6h16v6zm0-10H4V6h16v2z" />
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
export class SiPaymentIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
