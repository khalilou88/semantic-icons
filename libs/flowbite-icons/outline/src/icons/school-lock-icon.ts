import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-school-lock-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M8.21448 20v-9l-4 1.125V20h4Zm0 0V6.66667m0 13.33333h2.00002m6-11V6.66667m2 1.33333-6-4-6.00002 4m5.00002 1h2m-2 3h1m3 4v-2.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5V16m-4 0h5c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1h-5c-.5523 0-1-.4477-1-1v-2c0-.5523.4477-1 1-1Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSchoolLockIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
