import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-monitor-code-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.0302 4.34304C15.3231 4.63584 15.3233 5.11071 15.0305 5.4037L13.0603 7.37514L15.0305 9.34673C15.3233 9.63973 15.3231 10.1146 15.0301 10.4074C14.7371 10.7002 14.2623 10.7 13.9695 10.407L11.4695 7.90527C11.1768 7.61241 11.1768 7.13781 11.4695 6.84496L13.9695 4.34337C14.2623 4.05039 14.7372 4.05024 15.0302 4.34304Z"
      fill="#323544"
    />
    <svg:path
      d="M18.2198 4.34304C17.9269 4.63584 17.9267 5.11071 18.2195 5.4037L20.1897 7.37514L18.2195 9.34673C17.9267 9.63973 17.9269 10.1146 18.2199 10.4074C18.5129 10.7002 18.9877 10.7 19.2805 10.407L21.7805 7.90527C22.0732 7.61241 22.0732 7.13781 21.7805 6.84496L19.2805 4.34337C18.9877 4.05039 18.5128 4.05024 18.2198 4.34304Z"
      fill="#323544"
    />
    <svg:path
      d="M22 15.344V11.6622C21.5725 12.1975 21.0667 12.6675 20.5 13.0549V15.344C20.5 15.7582 20.1642 16.094 19.75 16.094H4.25C3.83579 16.094 3.5 15.7582 3.5 15.344V6.75021C3.5 6.33599 3.83579 6.00021 4.25 6.00021H9.88753C9.99391 5.47609 10.1599 4.97363 10.3782 4.50021H4.25C3.00736 4.50021 2 5.50757 2 6.75021V15.344C2 16.5866 3.00736 17.594 4.25 17.594H11.25V19.2502H9.00003C8.58582 19.2502 8.25003 19.586 8.25003 20.0002C8.25003 20.4144 8.58582 20.7502 9.00003 20.7502H15C15.4142 20.7502 15.75 20.4144 15.75 20.0002C15.75 19.586 15.4142 19.2502 15 19.2502H12.75V17.594H19.75C20.9926 17.594 22 16.5866 22 15.344Z"
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
export class SiMonitorCodeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
