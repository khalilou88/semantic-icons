import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-contract-right-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.1715 10.9999L7.51457 6.34305L8.92878 4.92883L15.9999 11.9999L8.92878 19.071L7.51457 17.6568L12.1714 12.9999L2.9996 13L2.99957 11L12.1715 10.9999ZM17.9996 18.9998L17.9996 4.99985H19.9996L19.9996 18.9998H17.9996Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiContractRightLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
