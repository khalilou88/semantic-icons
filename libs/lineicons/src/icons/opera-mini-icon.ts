import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-opera-mini-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.6452 3.32258C7.77419 3.32258 4.45161 12.3548 8.67742 17.6452C10.129 19.5161 12.2258 20.6774 14.6452 20.6774C16.0968 20.6774 17.5161 20.2258 18.6452 19.4516C16.9032 21 14.5484 22 12 22C11.871 22 11.6774 22 11.5484 22C6.22581 21.7742 2 17.3548 2 12C2 6.45161 6.45161 2 12 2H12.0323C14.5806 2 16.9032 2.96774 18.6774 4.54839C17.5161 3.77419 16.129 3.32258 14.6452 3.32258ZM18.7419 19.3548C17.0968 20.3548 15.0968 20.3226 13.4194 19.129C15.6774 18.2581 17.3871 15.4516 17.3871 12C17.3871 8.58064 15.7419 5.74194 13.4194 4.87097C15.0968 3.67742 17.0968 3.64516 18.7742 4.67742C23.0968 8.64516 23.0645 15.4194 18.7419 19.3548Z"
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
export class SiOperaMiniIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
