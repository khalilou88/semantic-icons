import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-location-arrow-right-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.56538 12.7847C2.64868 12.0166 2.69235 9.28826 4.63265 8.58188L18.6297 3.48619C20.4257 2.83233 22.1675 4.5741 21.5136 6.37015L16.4179 20.3672C15.7116 22.3075 12.9833 22.3511 12.2152 20.4344L10.146 15.2711C10.0697 15.0808 9.91898 14.9301 9.72877 14.8539L4.56538 12.7847ZM5.14579 9.99138C4.49902 10.2268 4.48446 11.1363 5.12336 11.3923L10.2867 13.4615C10.8574 13.6902 11.3096 14.1424 11.5383 14.7131L13.6075 19.8765C13.8636 20.5154 14.773 20.5008 15.0084 19.854L20.1041 5.85701C20.3221 5.25833 19.7415 4.67774 19.1428 4.89569L5.14579 9.99138Z"
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
export class SiLocationArrowRightIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
