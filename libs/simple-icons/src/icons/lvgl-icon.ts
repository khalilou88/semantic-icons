import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-lvgl-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>LVGL</svg:title>
    <svg:path
      d="M9.23 16.615h5.54c.51 0 .922.412.922.923v5.539a.921.921 0 0 1-.923.923H9.231a.921.921 0 0 1-.923-.923v-5.539c0-.511.411-.923.923-.923zM0 17.538c0-.51.413-.923.923-.923h5.539c.51 0 .923.413.923.923v5.539c0 .51-.414.923-.923.923H2.769A2.77 2.77 0 0 1 0 21.23zm.923-9.23h5.539c.511 0 .923.411.923.922v5.539a.921.921 0 0 1-.923.923H.923A.921.921 0 0 1 0 14.769V9.23c0-.511.412-.923.923-.923zM2.77 0A2.77 2.77 0 0 0 0 2.769V6.46c0 .51.413.923.923.923h5.539c1.02 0 1.846.827 1.846 1.846v5.539c0 .51.413.923.923.923h5.538c1.02 0 1.847.826 1.847 1.846v5.539c0 .51.413.923.923.923h3.692A2.77 2.77 0 0 0 24 21.23V2.77a2.77 2.77 0 0 0-2.77-2.77zm18 1.846a1.385 1.385 0 1 1 0 2.769 1.385 1.385 0 0 1 0-2.77z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLvglIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#343839');
}
