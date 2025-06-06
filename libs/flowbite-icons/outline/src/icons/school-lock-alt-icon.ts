import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-school-lock-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m7.35709 11 5.00001-6 3.3333 4m-8.33331 2h-3v8h7.00001m-4.00001-8H3.3571l3-4h4.3374l-3.33741 4Zm8.33131-2-1.6687-2h4.3374l1.5 2m-8.3237 5.8976c-1.0239-.4146-1.5178-1.5806-1.1032-2.6044.4146-1.0239 1.5806-1.5178 2.6044-1.1032M16.3571 15v-2.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5V15m-4 0h5c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1h-5c-.5523 0-1-.4477-1-1v-2c0-.5523.4477-1 1-1Z"
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
export class SiSchoolLockAltIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
