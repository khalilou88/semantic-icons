import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hammer-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.66406 2C6.24985 2 5.91406 2.33579 5.91406 2.75V6.93359C5.91406 7.34781 6.24985 7.68359 6.66406 7.68359H10.38L9.82293 19.6453C9.76322 20.9277 10.7868 22 12.0705 22H12.9275C14.2113 22 15.2348 20.9277 15.1751 19.6453L14.6181 7.68359H18.3349C18.7492 7.68359 19.0849 7.34781 19.0849 6.93359V6.75C19.0849 4.12665 16.9583 2 14.335 2H6.66406ZM13.1165 7.68359L13.6767 19.7151C13.6966 20.1426 13.3555 20.5 12.9275 20.5H12.0705C11.6426 20.5 11.3014 20.1426 11.3213 19.7151L11.8816 7.68359H13.1165ZM17.5358 6.18359H11.1648C11.1646 6.18359 11.1651 6.18359 11.1648 6.18359H7.41406V3.5H14.335C15.9367 3.5 17.2678 4.65869 17.5358 6.18359Z"
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
export class SiHammer1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
