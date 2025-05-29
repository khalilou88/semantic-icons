import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-twitch-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.77375 2L2.45117 5.45161V19.4839H7.22535V22H9.90277L12.4512 19.4516H16.3221L21.5479 14.2258V2H3.77375ZM19.7415 13.3226L16.7415 16.3226H11.9995L9.45116 18.871V16.3226H5.4189V3.77419H19.7415V13.3226ZM16.7737 7.22581V12.4516H14.9995V7.22581H16.7737ZM11.9995 7.22581V12.4516H10.2254V7.22581H11.9995Z"
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
export class SiTwitchIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
