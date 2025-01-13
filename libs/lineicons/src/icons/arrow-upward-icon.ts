import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-arrow-upward-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.7547 4.01253C11.8923 3.85184 12.0966 3.75 12.3247 3.75L12.3264 3.75C12.5188 3.74962 12.7113 3.82278 12.8581 3.96948L18.8583 9.96548C19.1513 10.2583 19.1514 10.7331 18.8586 11.0261C18.5659 11.3191 18.091 11.3193 17.798 11.0265L13.0747 6.30654L13.0747 20.5014C13.0747 20.9156 12.7389 21.2514 12.3247 21.2514C11.9105 21.2514 11.5747 20.9156 11.5747 20.5014L11.5747 6.31307L6.85829 11.0265C6.5653 11.3193 6.09043 11.3191 5.79763 11.0262C5.50483 10.7332 5.50498 10.2583 5.79796 9.96549L11.7547 4.01253Z"
      fill="#323544"
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
export class SiArrowUpwardIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
