import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-service-bell-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.25 7.53169V6L10 6C9.58579 6 9.25 5.66421 9.25 5.25C9.25 4.83579 9.58579 4.5 10 4.5H14C14.4142 4.5 14.75 4.83579 14.75 5.25C14.75 5.66421 14.4142 6 14 6L12.75 6V7.53169C17.2314 7.91212 20.75 11.6702 20.75 16.25V18H21.25C21.6642 18 22 18.3358 22 18.75C22 19.1642 21.6642 19.5 21.25 19.5H2.75C2.33579 19.5 2 19.1642 2 18.75C2 18.3358 2.33579 18 2.75 18H3.25V16.25C3.25 11.6702 6.7686 7.91212 11.25 7.53169ZM4.75 18H19.25V16.25C19.25 12.2459 16.0041 9 12 9C7.99594 9 4.75 12.2459 4.75 16.25V18Z"
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
export class SiServiceBell1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
