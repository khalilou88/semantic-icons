import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bread-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5 3C2.79086 3 1 4.79086 1 7C1 8.48168 1.8052 9.77343 3 10.4646V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V10.4646C22.1948 9.77343 23 8.48168 23 7C23 4.79086 21.2091 3 19 3H5ZM7 20C6.44772 20 6 19.5523 6 19V9.12212L5.33325 8.88645C4.5551 8.61142 4 7.86925 4 7C4 5.89543 4.89543 5 6 5H19C20.1046 5 21 5.89543 21 7C21 7.86925 20.4449 8.61142 19.6668 8.88645L19 9.12212V19C19 19.5523 18.5523 20 18 20H7Z"
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
export class SiBreadLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
