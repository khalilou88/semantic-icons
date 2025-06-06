import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-burger-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.5 3.75C5.60051 3.75 3.25 6.10051 3.25 9V10.4839C2.50914 10.8521 2 11.6166 2 12.5C2 13.3834 2.50914 14.1479 3.25 14.5161V18C3.25 19.2426 4.25736 20.25 5.5 20.25H18.5C19.7426 20.25 20.75 19.2426 20.75 18V14.5161C21.4909 14.1479 22 13.3834 22 12.5C22 11.6166 21.4909 10.8521 20.75 10.4839V9C20.75 6.10051 18.3995 3.75 15.5 3.75H8.5ZM19.75 11.75C20.1642 11.75 20.5 12.0858 20.5 12.5C20.5 12.9142 20.1642 13.25 19.75 13.25H4.25C3.83579 13.25 3.5 12.9142 3.5 12.5C3.5 12.0858 3.83579 11.75 4.25 11.75H19.75ZM19.25 10.25H4.75V9C4.75 6.92893 6.42893 5.25 8.5 5.25H15.5C17.5711 5.25 19.25 6.92893 19.25 9V10.25ZM4.75 14.75H19.25V18C19.25 18.4142 18.9142 18.75 18.5 18.75H5.5C5.08579 18.75 4.75 18.4142 4.75 18V14.75Z"
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
export class SiBurger1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
