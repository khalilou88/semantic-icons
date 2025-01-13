import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-system-security-update-good-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5 1v22h14V1H5zm12 17H7V6h10v12zm-1-7.95-1.41-1.41-3.54 3.54-1.41-1.41-1.41 1.41L11.05 15 16 10.05z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSystemSecurityUpdateGoodIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
