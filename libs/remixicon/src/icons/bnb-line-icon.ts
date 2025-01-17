import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-bnb-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.9999 20.689L9.99079 19.5258L9.98802 21.8352L12 23L14.0115 21.8355L14.0087 19.5261L11.9999 20.689ZM16.0073 18.369L16.0101 20.6784L21.5 17.5V11.1457L19.5 12.2972V16.3469L16.0073 18.369ZM19.5 9.9894L21.5 8.83789V6.5L19.5041 5.34448L17.5082 6.49998L19.5 7.65311V9.9894ZM15.5124 5.34448L17.5082 4.18898L12 1L6.49166 4.18904L8.48752 5.34454L11.9999 3.31104L15.5124 5.34448ZM6.49166 6.50004L4.49579 5.34454L2.5 6.5V8.8383L4.49994 9.98977V7.65314L6.49166 6.50004ZM2.5 11.1461L4.49994 12.2976V16.3469L7.99217 18.3687L7.98941 20.6781L2.5 17.5V11.1461ZM17.4999 8.80625L15.5123 7.65551L11.9999 9.68902L8.48758 7.65558L6.5 8.80628V11.1413L9.99841 13.1555L9.99355 17.2164L11.9999 18.378L14.0059 17.2167L14.0011 13.1554L17.4999 11.1409V8.80625ZM7.99494 16.0594L7.99703 14.311L6.5 13.4491V15.1939L7.99494 16.0594ZM10.4834 6.50008L11.9999 7.37802L13.5164 6.50001L12 5.62207L10.4834 6.50008ZM16.0025 14.3109L17.4999 13.4488V15.1938L16.0046 16.0596L16.0025 14.3109Z"
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
export class SiBnbLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
