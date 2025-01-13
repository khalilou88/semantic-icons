import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-clockwise-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 10H23L19 15L15 10H18V8C18 6.34315 16.6569 5 15 5H11V3H15C17.7614 3 20 5.23858 20 8V10ZM13 9C13.5523 9 14 9.44772 14 10V20C14 20.5523 13.5523 21 13 21H3C2.44772 21 2 20.5523 2 20V10C2 9.44772 2.44772 9 3 9H13Z"
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
export class SiClockwiseFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
