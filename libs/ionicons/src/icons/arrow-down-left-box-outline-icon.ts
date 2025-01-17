import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-arrow-down-left-box-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M123.636 269.236V90.546A42.545 42.545 0 01166.182 48h255.273A42.546 42.546 0 01464 90.545v255.273a42.542 42.542 0 01-42.545 42.546H242.764M48 331.636V464h132.364M296 216L48 464"
      stroke="currentColor"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
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
export class SiArrowDownLeftBoxOutlineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');

  readonly fill = input<string>('none');
}
