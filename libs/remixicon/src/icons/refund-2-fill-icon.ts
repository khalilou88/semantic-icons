import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-refund-2-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.0049 2C17.5277 2 22.0049 6.47715 22.0049 12C22.0049 17.5228 17.5277 22 12.0049 22C9.57847 22 7.3539 21.1358 5.62216 19.6985L5.37815 19.4892L6.27949 17.5875C7.73229 19.0759 9.76067 20 12.0049 20C16.4232 20 20.0049 16.4183 20.0049 12C20.0049 7.58172 16.4232 4 12.0049 4C7.66997 4 4.14034 7.44784 4.00869 11.7508L4.00488 12H6.50488L3.79854 17.7161C2.66796 16.096 2.00488 14.1254 2.00488 12C2.00488 6.47715 6.48204 2 12.0049 2ZM13.0049 6V8H15.5049V10H10.0049C9.72874 10 9.50488 10.2239 9.50488 10.5C9.50488 10.7455 9.68176 10.9496 9.91501 10.9919L10.0049 11H14.0049C15.3856 11 16.5049 12.1193 16.5049 13.5C16.5049 14.8807 15.3856 16 14.0049 16H13.0049V18H11.0049V16H8.50488V14H14.0049C14.281 14 14.5049 13.7761 14.5049 13.5C14.5049 13.2545 14.328 13.0504 14.0948 13.0081L14.0049 13H10.0049C8.62417 13 7.50488 11.8807 7.50488 10.5C7.50488 9.11929 8.62417 8 10.0049 8H11.0049V6H13.0049Z"
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
export class SiRefund2FillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
