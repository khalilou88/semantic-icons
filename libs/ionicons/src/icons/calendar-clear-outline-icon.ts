import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-calendar-clear-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
      x="48"
      y="80"
      width="416"
      height="384"
      rx="48"
    />
    <svg:path
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
      stroke-linecap="round"
      d="M128 48v32M384 48v32M464 160H48"
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
export class SiCalendarClearOutlineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
