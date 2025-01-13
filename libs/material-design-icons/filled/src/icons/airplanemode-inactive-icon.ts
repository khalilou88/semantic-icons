import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-airplanemode-inactive-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.5 7.67V3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V9l8.5 5v2l-4.49-1.32-7.01-7.01zm9.28 14.94 1.41-1.41-7.69-7.7-3.94-3.94-6.75-6.75-1.42 1.41 6.38 6.38L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-2.67l6.28 6.28z"
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
export class SiAirplanemodeInactiveIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
