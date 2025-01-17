import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-upptime-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Upptime</svg:title>
    <svg:path
      d="M11.86 15.68c1.926 0 3.489 1.526 3.489 3.406 0 1.88-1.563 3.407-3.488 3.407-1.926 0-3.489-1.526-3.489-3.407 0-1.88 1.563-3.407 3.489-3.407ZM24 14.884 12 1.507 0 14.885l3.158 3.52L12 8.548l8.842 9.857L24 14.885Z"
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
export class SiUpptimeIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#1ABC9C');
}
