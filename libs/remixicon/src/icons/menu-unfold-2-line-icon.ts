import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-menu-unfold-2-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.5956 3.90332L15.9994 8.49951L20.5956 13.0957L22.0098 11.6815L18.8278 8.49951L22.0098 5.31753L20.5956 3.90332ZM21 19.9995V17.9995H3V19.9995H21ZM12 12.9995V10.9995H3V12.9995H12ZM12 5.99951V3.99951H3V5.99951H12Z"
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
export class SiMenuUnfold2LineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
