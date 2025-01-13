import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-filter-8-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7 17h14V3H7v14zm4-5.5c0-.83.67-1.5 1.5-1.5-.83 0-1.5-.67-1.5-1.5V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V13a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1.5zM13 7h2v2h-2zm0 4h2v2h-2z"
      opacity=".3"
    />
    <svg:path
      d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2zm10-8h2a2 2 0 0 0 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1.5c0 .83.67 1.5 1.5 1.5-.83 0-1.5.67-1.5 1.5V13a2 2 0 0 0 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z"
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
export class SiFilter8Icon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
