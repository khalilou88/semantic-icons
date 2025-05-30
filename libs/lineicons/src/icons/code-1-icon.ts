import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-code-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.0582 4.16286C15.1481 3.75851 14.8931 3.35788 14.4888 3.26802C14.0844 3.17816 13.6838 3.43311 13.5939 3.83746L10.0384 19.8374C9.94851 20.2418 10.2035 20.6424 10.6078 20.7323C11.0122 20.8221 11.4128 20.5672 11.5026 20.1628L15.0582 4.16286Z"
      fill="#323544"
    />
    <svg:path
      d="M7.82913 7.46956C8.12204 7.76244 8.12206 8.23732 7.82918 8.53022L4.35946 12.0003L7.82916 15.47C8.12205 15.7628 8.12205 16.2377 7.82916 16.5306C7.53627 16.8235 7.06139 16.8235 6.7685 16.5306L2.7685 12.5306C2.47561 12.2377 2.4756 11.7629 2.76847 11.47L6.76847 7.46961C7.06135 7.1767 7.53623 7.17668 7.82913 7.46956Z"
      fill="#323544"
    />
    <svg:path
      d="M17.2685 7.46956C16.9756 7.76244 16.9756 8.23732 17.2685 8.53022L20.7382 12.0003L17.2685 15.47C16.9756 15.7628 16.9756 16.2377 17.2685 16.5306C17.5614 16.8235 18.0363 16.8235 18.3292 16.5306L22.3292 12.5306C22.622 12.2377 22.6221 11.7629 22.3292 11.47L18.3292 7.46961C18.0363 7.1767 17.5614 7.17668 17.2685 7.46956Z"
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
export class SiCode1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
