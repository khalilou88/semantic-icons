import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wordpress-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2C6.45161 2 2 6.48387 2 12C2 17.5161 6.45161 22 12 22C17.5484 22 22 17.4839 22 12C22 6.51613 17.4839 2 12 2ZM20.871 12C20.871 15.3548 19 18.2581 16.2903 19.7419L18.871 13.0968C19 12.7419 19.9032 10.5484 20.2258 8.67742C20.6452 9.74194 20.871 10.871 20.871 12ZM13.9032 7.64516H12.8065H9.35484C9.16129 7.64516 9.03226 7.77419 9.03226 7.96774C9.03226 8.16129 9.16129 8.29032 9.35484 8.29032H10L11.129 11.1935L9.77419 14.6774L7.32258 8.25806H8.09677C8.29032 8.25806 8.41935 8.12903 8.41935 7.93548C8.41935 7.74194 8.29032 7.6129 8.09677 7.6129H6.77419L4.64516 7.58064C6.09677 5.03226 8.90323 3.35484 12 3.35484C14.2581 3.35484 16.3548 4.25806 17.9032 5.70968C17.0968 5.83871 16.4516 6.48387 16.2581 7.25806C16.0645 8.16129 16.3871 8.90323 16.7419 9.58064C17.0968 10.3226 17.4839 11 17.1935 11.8065L16 14.9032L13.4516 8.25806H13.9355C14.129 8.25806 14.2581 8.12903 14.2581 7.93548C14.2581 7.77419 14.0323 7.64516 13.9032 7.64516ZM3.12903 12C3.12903 10.871 3.35484 9.77419 3.77419 8.77419L8.12903 19.9677C5.12903 18.5484 3.12903 15.5161 3.12903 12ZM12.0968 13.9032L14.6774 20.4516C13.8065 20.7097 12.9355 20.871 12 20.871C11.129 20.871 10.3226 20.7742 9.54839 20.5161L12.0968 13.9032Z"
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
export class SiWordpressIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
