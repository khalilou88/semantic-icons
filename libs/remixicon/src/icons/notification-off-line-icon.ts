import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-notification-off-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.5859 20H4.00016C3.72401 20 3.50016 19.7762 3.50016 19.5C3.50016 19.3918 3.53525 19.2866 3.60016 19.2L4.00016 18.6667V10C4.00016 8.67022 4.32462 7.41619 4.8987 6.31279L1.39355 2.80765L2.80777 1.39343L22.6068 21.1924L21.1925 22.6066L18.5859 20ZM6.40776 7.82185C6.14458 8.49707 6.00016 9.23169 6.00016 10V18H16.5859L6.40776 7.82185ZM20.0002 15.7858L18.0002 13.7858V10C18.0002 6.68633 15.3139 4.00003 12.0002 4.00003C10.9117 4.00003 9.89096 4.28986 9.01087 4.79655L7.55919 3.34486C8.8297 2.49537 10.3571 2.00003 12.0002 2.00003C16.4184 2.00003 20.0002 5.58176 20.0002 10V15.7858ZM9.50016 21H14.5002C14.5002 22.3807 13.3809 23.5 12.0002 23.5C10.6194 23.5 9.50016 22.3807 9.50016 21Z"
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
export class SiNotificationOffLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
