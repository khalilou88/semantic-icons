import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-fiber-pin-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11 15h1.5V9H11v6zm7.75-6v3.5L16.25 9H15v6h1.25v-3.5L18.8 15H20V9h-1.25zM7.5 9H4v6h1.5v-2h2c.85 0 1.5-.65 1.5-1.5v-1C9 9.65 8.35 9 7.5 9zm0 2.5h-2v-1h2v1z"
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
export class SiFiberPinIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
