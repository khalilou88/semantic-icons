import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bakery-dining-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m16.36 7.58-.86 9.41H17l3.16-7.89zM3.84 9.1 7 16.99h1.5l-.86-9.41zM10 16.99h4L15 6H9zm10.32-4.24-1.81 4.5 1.95.96 2.06-1.22zM1.48 16.99l2.06 1.22 1.95-.96-1.81-4.5z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBakeryDiningIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
