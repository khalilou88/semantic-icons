import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-clockwise-2-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10 4V1L15 5L10 9V6H8C6.34315 6 5 7.34315 5 9V13H3V9C3 6.23858 5.23858 4 8 4H10ZM9 11C9 10.4477 9.44772 10 10 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H10C9.44772 22 9 21.5523 9 21V11Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiClockwise2FillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
