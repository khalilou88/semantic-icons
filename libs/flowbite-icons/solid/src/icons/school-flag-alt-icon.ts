import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-school-flag-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 12c-.5523 0-1 .4477-1 1s.4477 1 1 1 1-.4477 1-1-.4477-1-1-1Z"
    />
    <svg:path
      fill-rule="evenodd"
      d="M17 4c-.5523 0-1 .44772-1 1v4.97045l-4-4.92309-5.34889 6.58324c-.18989.2337-.47499.3694-.77612.3694H3v7c0 .5523.44772 1 1 1h16c.5523 0 1-.4477 1-1v-7h-2.875c-.0421 0-.0838-.0026-.125-.0078V9h3c.5523 0 1-.44772 1-1V5c0-.55228-.4477-1-1-1h-4Zm-8.00001 9c0-1.6568 1.34311-3 3.00001-3 1.6568 0 3 1.3432 3 3 0 1.6569-1.3432 3-3 3-1.6569 0-3.00001-1.3431-3.00001-3Z"
      clip-rule="evenodd"
    />
    <svg:path
      d="M5.2 6.40001 2.5 10h2.89902l3.25-3.99999H6c-.31476 0-.61115.1482-.8.4Z"
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
export class SiSchoolFlagAltIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
