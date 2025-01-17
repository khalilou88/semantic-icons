import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-safe-2-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.0049 20.3331V21.9998H18.0049V20.6664L10.5871 21.9027C10.3147 21.9481 10.0571 21.7641 10.0117 21.4917C10.0072 21.4646 10.0049 21.4371 10.0049 21.4095V19.9998H6.00488V21.9998H4.00488V19.9998H3.00488C2.4526 19.9998 2.00488 19.552 2.00488 18.9998V3.99977C2.00488 3.44748 2.4526 2.99977 3.00488 2.99977H10.0049V1.59C10.0049 1.31385 10.2287 1.09 10.5049 1.09C10.5324 1.09 10.5599 1.09227 10.5871 1.0968L21.1693 2.8605C21.6515 2.94086 22.0049 3.35805 22.0049 3.84689V5.99977H23.0049V7.99977H22.0049V14.9998H23.0049V16.9998H22.0049V19.1526C22.0049 19.6415 21.6515 20.0587 21.1693 20.139L20.0049 20.3331ZM4.00488 4.99977V17.9998H10.0049V4.99977H4.00488ZM12.0049 19.6388L20.0049 18.3055V4.69402L12.0049 3.36069V19.6388ZM16.5049 13.9998C15.6765 13.9998 15.0049 12.8805 15.0049 11.4998C15.0049 10.1191 15.6765 8.99977 16.5049 8.99977C17.3333 8.99977 18.0049 10.1191 18.0049 11.4998C18.0049 12.8805 17.3333 13.9998 16.5049 13.9998Z"
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
export class SiSafe2LineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
