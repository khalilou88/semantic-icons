import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-magnet-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.75 5.50098C3.75 4.25834 4.75736 3.25098 6 3.25098H8C9.24264 3.25098 10.25 4.25834 10.25 5.50098V12.001C10.25 13.2436 11.2574 14.251 12.5 14.251C13.7426 14.251 14.75 13.2436 14.75 12.001V5.50098C14.75 4.25834 15.7574 3.25098 17 3.25098H19C20.2426 3.25098 21.25 4.25834 21.25 5.50098V12.001C21.25 16.8335 17.3325 20.751 12.5 20.751C7.66751 20.751 3.75 16.8335 3.75 12.001V5.50098ZM6 4.75098C5.58579 4.75098 5.25 5.08676 5.25 5.50098V7.75098H8.75V5.50098C8.75 5.08676 8.41421 4.75098 8 4.75098H6ZM5.25 12.001C5.25 16.005 8.49594 19.251 12.5 19.251C16.5041 19.251 19.75 16.005 19.75 12.001V9.25098L16.25 9.25098V12.001C16.25 14.072 14.5711 15.751 12.5 15.751C10.4289 15.751 8.75 14.072 8.75 12.001V9.25098H5.25V12.001ZM19.75 7.75098V5.50098C19.75 5.08676 19.4142 4.75098 19 4.75098H17C16.5858 4.75098 16.25 5.08676 16.25 5.50098V7.75098L19.75 7.75098Z"
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
export class SiMagnetIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
