import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-home-gear-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM8.59208 13.808L7.60099 14.3802L8.6017 16.1133L9.5943 15.5402C9.98756 15.9116 10.467 16.193 10.9994 16.3512V17.4956H13.0007V16.3512C13.5331 16.1929 14.0125 15.9115 14.4057 15.5401L15.3984 16.1132L16.399 14.3801L15.4079 13.8078C15.4696 13.5478 15.5022 13.2766 15.5022 12.9978C15.5022 12.7189 15.4696 12.4477 15.4078 12.1877L16.399 11.6154L15.3983 9.88225L14.4056 10.4554C14.0124 10.084 13.533 9.80264 13.0006 9.64436V8.49998H10.9993V9.64436C10.4669 9.80265 9.98747 10.084 9.59421 10.4554L8.60164 9.88234L7.60099 11.6155L8.59205 12.1877C8.53034 12.4477 8.49768 12.7189 8.49768 12.9978C8.49768 13.2767 8.53035 13.5479 8.59208 13.808ZM12 14.4971C11.171 14.4971 10.499 13.8258 10.499 12.9978C10.499 12.1698 11.171 11.4985 12 11.4985C12.8289 11.4985 13.5009 12.1698 13.5009 12.9978C13.5009 13.8258 12.8289 14.4971 12 14.4971Z"
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
export class SiHomeGearFillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
