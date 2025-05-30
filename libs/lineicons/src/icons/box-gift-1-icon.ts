import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-box-gift-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.40585 5.78711C8.23261 5.4368 8.13525 5.04227 8.13525 4.625C8.13525 3.17525 9.31051 2 10.7603 2C11.4948 2 12.1588 2.30168 12.6353 2.78788C13.1117 2.30168 13.7757 2 14.5103 2C15.96 2 17.1353 3.17525 17.1353 4.625C17.1353 5.04227 17.0379 5.4368 16.8647 5.78711H19.1433C20.386 5.78711 21.3933 6.79447 21.3933 8.03711V8.50001C21.3933 9.31501 20.96 10.0288 20.3112 10.4236V19C20.3112 20.2426 19.3038 21.25 18.0612 21.25H7.2096C5.96696 21.25 4.9596 20.2426 4.9596 19V10.4236C4.31077 10.0288 3.87744 9.31501 3.87744 8.50001V8.03711C3.87744 6.79447 4.8848 5.78711 6.12744 5.78711H8.40585ZM14.5103 3.5C13.8889 3.5 13.3853 4.00368 13.3853 4.625V5.75H14.5103C15.1316 5.75 15.6353 5.24632 15.6353 4.625C15.6353 4.00368 15.1316 3.5 14.5103 3.5ZM11.8853 5.75V4.625C11.8853 4.00368 11.3816 3.5 10.7603 3.5C10.1389 3.5 9.63525 4.00368 9.63525 4.625C9.63525 5.24632 10.1389 5.75 10.7603 5.75H11.8853ZM18.8112 10.75H6.4596V19C6.4596 19.4142 6.79538 19.75 7.2096 19.75H18.0612C18.4754 19.75 18.8112 19.4142 18.8112 19V10.75ZM19.1433 9.25001C19.5576 9.25001 19.8933 8.91422 19.8933 8.50001V8.03711C19.8933 7.6229 19.5576 7.28711 19.1433 7.28711H6.12744C5.71323 7.28711 5.37744 7.6229 5.37744 8.03711V8.50001C5.37744 8.91422 5.71323 9.25001 6.12744 9.25001H19.1433Z"
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
export class SiBoxGift1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
