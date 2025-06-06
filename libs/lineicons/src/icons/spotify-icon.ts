import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-spotify-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2C6.45161 2 2 6.45161 2 12C2 17.5484 6.45161 22 12 22C17.5484 22 22 17.5484 22 12C22 6.45161 17.5484 2 12 2ZM16.5806 16.4194C16.3871 16.6774 16.0323 16.7742 15.7097 16.6452C13.3548 15.1935 10.3871 14.871 6.93548 15.6452C6.58064 15.7419 6.25806 15.5161 6.19355 15.1935C6.09677 14.8387 6.32258 14.5161 6.64516 14.4194C10.4516 13.5484 13.6774 13.9355 16.3871 15.5484C16.6774 15.7742 16.7742 16.129 16.5806 16.4194ZM17.8065 13.7419C17.5806 14.0968 17.0645 14.1935 16.7742 13.9677C14.0968 12.3226 10 11.8387 6.80645 12.8387C6.3871 12.9677 5.93548 12.7419 5.83871 12.2903C5.70968 11.871 5.93548 11.4194 6.3871 11.3226C10.0323 10.1935 14.5161 10.7742 17.6129 12.6452C17.9032 12.871 18.0323 13.3226 17.8065 13.7419ZM17.9032 10.871C14.6774 8.96774 9.35484 8.77419 6.25806 9.74194C5.80645 9.87097 5.25806 9.6129 5.12903 9.09677C5 8.64516 5.25806 8.09677 5.77419 7.96774C9.32258 6.93548 15.129 7.09677 18.871 9.32258C19.3226 9.58065 19.4516 10.1935 19.2258 10.5806C18.9677 11 18.3548 11.129 17.9032 10.871Z"
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
export class SiSpotifyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
