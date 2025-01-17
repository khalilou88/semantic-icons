import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-arrow-down-right-box-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M269.236 388.364H90.546A42.546 42.546 0 0148 345.818V90.545A42.545 42.545 0 0190.545 48h255.273a42.543 42.543 0 0142.546 42.546v178.69M331.636 464H464V331.636M216 216l248 248"
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
export class SiArrowDownRightBoxOutlineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');

  readonly fill = input<string>('none');
}
