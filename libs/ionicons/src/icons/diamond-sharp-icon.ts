import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-diamond-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M396.31 32H264l84.19 112.26L396.31 32zM115.69 32l48.12 112.26L248 32H115.69zM256 74.67L192 160h128l-64-85.33zM422.95 51.06L376.26 160H488L422.95 51.06zM89.05 51.06L23 160h112.74L89.05 51.06zM146.68 192H24l222.8 288h.53L146.68 192zM365.32 192L264.67 480h.53L488 192H365.32zM329.39 192H182.61L256 400l73.39-208z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDiamondSharpIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
