import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-question-mark-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.16016 8.83908C9.16016 7.2711 10.4313 6 11.9992 6C13.5672 6 14.8383 7.2711 14.8383 8.83908C14.8383 9.71357 14.4438 10.4952 13.8204 11.0172C13.2982 11.4544 12.6659 11.9878 12.1694 12.6045C11.669 13.2259 11.2492 14.0008 11.2492 14.9282V15.7505C11.2492 16.1647 11.585 16.5005 11.9992 16.5005C12.4134 16.5005 12.7492 16.1647 12.7492 15.7505V14.9282C12.7492 14.4748 12.9515 14.0249 13.3377 13.5452C13.7279 13.0607 14.2469 12.6164 14.7833 12.1673C15.7326 11.3725 16.3383 10.1762 16.3383 8.83908C16.3383 6.44267 14.3956 4.5 11.9992 4.5C9.60283 4.5 7.66016 6.44267 7.66016 8.83908C7.66016 9.25329 7.99594 9.58908 8.41016 9.58908C8.82437 9.58908 9.16016 9.25329 9.16016 8.83908Z"
      fill="#323544"
    />
    <svg:path
      d="M11.998 17.851C11.501 17.851 11.098 18.2539 11.098 18.751C11.098 19.248 11.501 19.651 11.998 19.651C12.4951 19.651 12.899 19.248 12.899 18.751C12.899 18.2539 12.4951 17.851 11.998 17.851Z"
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
export class SiQuestionMarkIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
