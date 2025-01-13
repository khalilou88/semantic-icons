import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ethereum-logo-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.09277 12.1854L11.9983 2L17.9049 12.1854L11.9983 15.8144L6.09277 12.1854Z"
      fill="#323544"
    />
    <svg:path
      d="M6.09277 13.3499L11.9983 22L17.9082 13.3499L11.9983 16.9767L6.09277 13.3499Z"
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
export class SiEthereumLogoIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
