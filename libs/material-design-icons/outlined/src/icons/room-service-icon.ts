import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-room-service-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.98 17H2v2h20v-2zM21 16c-.27-4.07-3.25-7.4-7.16-8.21A2.006 2.006 0 0 0 12 5a2.006 2.006 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18zm-9-6.42c2.95 0 5.47 1.83 6.5 4.41h-13A7.002 7.002 0 0 1 12 9.58z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRoomServiceIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
