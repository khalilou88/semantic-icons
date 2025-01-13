import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-expand-diagonal-s-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19 5H11.5L14.5429 8.04289L8.04289 14.5429L5 11.5V19H12.5L9.45711 15.9571L15.9571 9.45711L19 12.5V5Z"
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
export class SiExpandDiagonalSFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
