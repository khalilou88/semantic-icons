import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-do-not-disturb-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7 13v-2h1.17L5.12 7.94A7.932 7.932 0 0 0 4 12c0 4.41 3.59 8 8 8 1.48 0 2.86-.41 4.06-1.12L10.17 13H7zm5-9c-1.48 0-2.86.41-4.06 1.12L13.83 11H17v2h-1.17l3.06 3.06c.7-1.2 1.11-2.58 1.11-4.06 0-4.41-3.59-8-8-8z"
    />
    <svg:path
      d="M12 4c4.41 0 8 3.59 8 8 0 1.48-.41 2.86-1.12 4.06l1.46 1.46A9.967 9.967 0 0 0 22 12c0-5.52-4.48-10-10-10-2.04 0-3.93.61-5.51 1.66l1.46 1.46A7.869 7.869 0 0 1 12 4zm5 9v-2h-3.17l2 2H17zM1.39 4.22l2.27 2.27A9.91 9.91 0 0 0 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l2.27 2.27 1.41-1.41L2.81 2.81 1.39 4.22zm3.73 3.72L8.17 11H7v2h3.17l5.88 5.88A7.869 7.869 0 0 1 12 20c-4.41 0-8-3.59-8-8 0-1.48.41-2.86 1.12-4.06z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDoNotDisturbOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
