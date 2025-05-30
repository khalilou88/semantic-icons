import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-party-spray-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.5 2.75C10.5 2.33579 10.8358 2 11.25 2H12.75C12.9489 2 13.1397 2.07902 13.2803 2.21967C13.3602 2.29952 13.4202 2.39552 13.4571 2.5H14C14.4142 2.5 14.75 2.83579 14.75 3.25C14.75 3.66421 14.4142 4 14 4H13.5V4.91726C16.506 5.59936 18.75 8.28762 18.75 11.5V19.75C18.75 20.9926 17.7426 22 16.5 22H7.5C6.25736 22 5.25 20.9926 5.25 19.75V11.5C5.25 8.28762 7.49402 5.59936 10.5 4.91726V2.75ZM6.75 11.5V12.25H17.25V11.5C17.25 8.60051 14.8995 6.25 12 6.25C9.10051 6.25 6.75 8.60051 6.75 11.5ZM17.25 13.75H6.75V19.75C6.75 20.1642 7.08579 20.5 7.5 20.5H16.5C16.9142 20.5 17.25 20.1642 17.25 19.75V13.75Z"
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
export class SiPartySprayIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
