import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bus-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7 14.4375C7 13.7471 7.55964 13.1875 8.25 13.1875C8.94036 13.1875 9.5001 13.7471 9.5001 14.4375C9.5001 15.1279 8.94046 15.6875 8.2501 15.6875C7.55974 15.6875 7 15.1279 7 14.4375Z"
      fill="#323544"
    />
    <svg:path
      d="M15.75 13.1875C15.0596 13.1875 14.5 13.7471 14.5 14.4375C14.5 15.1279 15.0596 15.6875 15.75 15.6875C16.4404 15.6875 17.0001 15.1279 17.0001 14.4375C17.0001 13.7471 16.4404 13.1875 15.75 13.1875Z"
      fill="#323544"
    />
    <svg:path
      d="M7.625 2.625C5.83293 2.625 4.33446 3.88206 3.96326 5.5625H3.875C3.04657 5.5625 2.375 6.23407 2.375 7.0625V7.8125C2.375 8.22671 2.71079 8.5625 3.125 8.5625H3.875V16.625C3.875 17.3498 4.21774 17.9946 4.75 18.4061V19.875C4.75 20.7034 5.42157 21.375 6.25 21.375C7.07843 21.375 7.75 20.7034 7.75 19.875V18.875H16.25V19.875C16.25 20.7034 16.9216 21.375 17.75 21.375C18.5784 21.375 19.25 20.7034 19.25 19.875V18.4061C19.7823 17.9946 20.125 17.3498 20.125 16.625V8.5625H20.875C21.2892 8.5625 21.625 8.22671 21.625 7.8125V7.0625C21.625 6.23407 20.9534 5.5625 20.125 5.5625H20.0367C19.6655 3.88206 18.1671 2.625 16.375 2.625H7.625ZM18.625 6.375V10H5.375V6.375C5.375 5.13236 6.38236 4.125 7.625 4.125H16.375C17.6176 4.125 18.625 5.13236 18.625 6.375ZM17.875 17.375H6.125C5.71079 17.375 5.375 17.0392 5.375 16.625V11.5H18.625V16.625C18.625 17.0392 18.2892 17.375 17.875 17.375Z"
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
export class SiBus1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
