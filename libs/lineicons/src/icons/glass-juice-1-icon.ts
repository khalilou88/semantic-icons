import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-glass-juice-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.7729 3.93571C13.8955 3.67009 14.1614 3.5 14.4539 3.5H17.4941C17.9084 3.5 18.2441 3.16421 18.2441 2.75C18.2441 2.33579 17.9084 2 17.4941 2H14.4539C13.5763 2 12.7788 2.51028 12.411 3.30712L11.5143 5.25H5.625C5.41332 5.25 5.21149 5.33946 5.06932 5.49629C4.92715 5.65313 4.85788 5.86275 4.87861 6.07342L6.24551 19.9702C6.3588 21.122 7.32736 22 8.4847 22H15.5153C16.6726 22 17.6412 21.122 17.7545 19.9702L19.1214 6.07342C19.1421 5.86275 19.0729 5.65313 18.9307 5.49629C18.7885 5.33946 18.5867 5.25 18.375 5.25H13.1663L13.7729 3.93571ZM11.9773 6.75C11.9882 6.75024 11.9992 6.75024 12.0101 6.75H17.5476L16.2617 19.8234C16.2239 20.2073 15.9011 20.5 15.5153 20.5H8.4847C8.09892 20.5 7.77607 20.2073 7.7383 19.8234L6.45239 6.75H11.9773Z"
      fill="#323544"
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
export class SiGlassJuice1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
