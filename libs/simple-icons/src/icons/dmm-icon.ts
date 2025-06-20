import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-dmm-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>DMM</svg:title>
    <svg:path
      d="M9.525.46H0v23.08h11.545C17.284 23.54 24 20.916 24 12S16.026.46 9.525.46zm.646 15.073V8.34c1.746 0 4.4.079 4.4 3.582 0 3.58-2.553 3.611-4.4 3.611z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDmmIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
