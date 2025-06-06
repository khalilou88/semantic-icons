import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-loom-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 10.9032H16.1613L21.2258 7.96774L20.129 6.03226L15.0645 8.96774L18 3.90323L16.0645 2.77419L13.129 7.83871V2H10.9032V7.83871L7.96774 2.77419L6.03226 3.87097L8.96774 8.93548L3.90323 6.03226L2.80645 7.96774L7.87097 10.9032H2V13.129H7.83871L2.77419 16.0323L3.87097 17.9677L8.93548 15.0323L6 20.0968L7.93548 21.1935L10.871 16.129V22H13.0968V16.1613L16.0323 21.2258L17.9677 20.129L15.0323 15.0645L20.0968 18L21.1935 16.0645L16.129 13.129H22V10.9032ZM12 15.0323C10.3226 15.0323 8.96774 13.6774 8.96774 12C8.96774 10.3226 10.3226 8.96774 12 8.96774C13.6774 8.96774 15.0323 10.3226 15.0323 12C15.0323 13.6774 13.6774 15.0323 12 15.0323Z"
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
export class SiLoomIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
