import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-microscope-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M5.6427 21h14M16.2928 9c.8398.95515 1.3499 2.213 1.3499 3.5912 0 2.9872-2.3962 5.4088-5.3521 5.4088-1.9895 0-3.72545-1.097-4.6479-2.7251m-2-.2749h6m.4369-4.4369L10.6427 12m5.8092-5.76698 2.1554-2.15534M17.5296 3l2.1553 2.15534M10.6427 18v3m4-3v3m.7315-15.84464-4.3107 4.31068 2.1554 2.15536 4.3107-4.3107-2.1554-2.15534Z"
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
export class SiMicroscopeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
