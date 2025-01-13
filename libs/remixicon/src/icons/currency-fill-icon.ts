import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-currency-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.0047 16.0028H19.0047V4.00281H9.00468V6.00281H17.0047V16.0028ZM17.0047 18.0028V21.0019C17.0047 21.5547 16.5547 22.0028 15.9978 22.0028H4.01154C3.45548 22.0028 3.00488 21.5582 3.00488 21.0019L3.00748 7.00368C3.00759 6.45091 3.45752 6.00281 4.0143 6.00281H7.00468V3.00281C7.00468 2.45052 7.4524 2.00281 8.00468 2.00281H20.0047C20.557 2.00281 21.0047 2.45052 21.0047 3.00281V17.0028C21.0047 17.5551 20.557 18.0028 20.0047 18.0028H17.0047ZM7.00468 16.0028V18.0028H9.00468V19.0028H11.0047V18.0028H11.5047C12.8854 18.0028 14.0047 16.8835 14.0047 15.5028C14.0047 14.1221 12.8854 13.0028 11.5047 13.0028H8.50468C8.22854 13.0028 8.00468 12.7789 8.00468 12.5028C8.00468 12.2267 8.22854 12.0028 8.50468 12.0028H13.0047V10.0028H11.0047V9.00281H9.00468V10.0028H8.50468C7.12397 10.0028 6.00468 11.1221 6.00468 12.5028C6.00468 13.8835 7.12397 15.0028 8.50468 15.0028H11.5047C11.7808 15.0028 12.0047 15.2267 12.0047 15.5028C12.0047 15.7789 11.7808 16.0028 11.5047 16.0028H7.00468Z"
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
export class SiCurrencyFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
