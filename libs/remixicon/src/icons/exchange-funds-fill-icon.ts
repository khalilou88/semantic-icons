import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-exchange-funds-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.37833 4.51335C7.14264 2.95113 9.46301 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 14.1277 21.3421 16.0978 20.212 17.7177L17.5049 12.0027H20.0049C20.0049 7.58447 16.4232 4.00275 12.0049 4.00275C9.76058 4.00275 7.73213 4.92691 6.27932 6.41544L5.37833 4.51335ZM18.6314 19.4921C16.8671 21.0544 14.5468 22.0027 12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 9.8778 2.66767 7.90766 3.79778 6.28776L6.50488 12.0027H4.00488C4.00488 16.421 7.5866 20.0027 12.0049 20.0027C14.2492 20.0027 16.2776 19.0786 17.7304 17.59L18.6314 19.4921ZM13.4191 14.8312L10.5907 12.0027L7.76224 14.8312L6.34803 13.417L10.5907 9.17432L13.4191 12.0027L16.2475 9.17432L17.6617 10.5885L13.4191 14.8312Z"
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
export class SiExchangeFundsFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
