import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-edge-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.2559 11.4821C21.2559 9.70827 20.9334 8.09567 20.1271 6.54756C18.4822 3.58036 15.5473 2 12.1286 2C6.51668 2 3.35596 6.22504 2.74316 10.8371C4.45253 8.35368 7.45199 5.93477 11.5803 5.80576C11.5803 5.80576 16.0311 5.80576 15.5795 10.0308H8.54857C8.77433 8.5472 9.25811 7.67639 9.90316 6.87008C6.87145 8.32143 5.00082 10.7726 5.06533 14.4816C5.09758 17.352 7.09722 20.3192 9.90316 21.4158C13.2574 22.6737 17.6437 21.6738 19.5466 20.545V16.32C16.3213 18.5776 8.61307 18.7711 8.61307 13.6108H21.2237V11.4821H21.2559Z"
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
export class SiEdgeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
