import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-wifi-channel-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13 21c.5-2.53 2-6 3-6s2.5 3.53 3 6h-6zm-7.99 0c.61-5.27 2-9.82 2.99-10.87.98 1.05 2.38 5.61 2.99 10.87H5.01zM16 13c-.99 0-1.82.62-2.5 1.5.57-4.77 1.54-8.62 2.5-9.44.97.81 1.91 4.67 2.49 9.43C17.81 13.62 16.98 13 16 13z"
      opacity=".3"
    />
    <svg:path
      d="M16 3c-2.51 0-3.77 5.61-4.4 10.57C10.79 10.66 9.61 8 8 8 4.43 8 3 21 3 21h2.01c.61-5.27 2-9.82 2.99-10.87.98 1.05 2.38 5.61 2.99 10.87H13c.5-2.53 2-6 3-6s2.5 3.53 3 6h2s-.5-18-5-18zm0 10c-.99 0-1.82.62-2.5 1.5.57-4.77 1.54-8.62 2.5-9.44.97.81 1.91 4.67 2.49 9.43C17.81 13.62 16.98 13 16 13z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWifiChannelIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
