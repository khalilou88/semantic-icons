import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hdr-plus-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.13 19c1.15.64 2.47 1 3.87 1 4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8c0 2.52 1.17 4.77 3 6.24V13h3.5c.8 0 1.5.7 1.5 1.5v1c0 .6-.4 1.1-.9 1.4L12 19h-1.5l-.9-2H8.5v2h-.37zM12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm5.5 14H16v1.5h-1.5V16H13v-1.5h1.5V13H16v1.49h1.5V16zm-7-.5v-1h-2v1h2zm0-7.5V6H12v6h-1.5V9.5h-2V12H7V6h1.5v2h2zM16 6c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5h-3V6h3zm0 4.5v-3h-1.5v3H16z"
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
export class SiHdrPlusIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
