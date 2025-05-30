import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bootstrap-5-square-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.7293 14.2355C14.7293 15.9484 13.1325 15.9194 12.9874 15.9194H9.70673V12.6387H12.9583C14.7003 12.5806 14.7293 13.8871 14.7293 14.2355ZM12.7261 11.2742C12.7551 11.2742 14.2648 11.3032 14.2648 9.79355C14.2648 9.18387 14.1487 8.37097 12.7261 8.37097H9.70673V11.2742H12.7261ZM20.9712 6.01935V18.0097C20.9712 19.6355 19.6358 21 17.9519 21H6.04866C4.36478 21 3.0293 19.6645 3.0293 17.9806V6.01935C3.0293 4.33548 4.36478 3 6.04866 3H18.039C19.6358 3 20.9712 4.33548 20.9712 6.01935ZM16.5583 14.4387C16.5583 13.5677 16.3261 12.1161 14.6132 11.7387V11.7097C15.5422 11.3032 16.0938 10.5774 16.0938 9.50323C16.0938 9.2129 16.1809 6.89032 12.9874 6.89032H7.90673V17.3419C13.0454 17.3419 13.539 17.371 14.468 17.1387C15.0196 16.9645 16.5583 16.4419 16.5583 14.4387Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBootstrap5SquareIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
