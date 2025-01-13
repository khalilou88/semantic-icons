import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-arrow-left-down-long-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.7784 5.63589L18.3644 4.22168L6.92908 15.6569L6.92908 10.0712H4.92908L4.92908 19.0712L13.9291 19.0712V17.0712L8.34326 17.0712L19.7784 5.63589Z"
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
export class SiArrowLeftDownLongLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
