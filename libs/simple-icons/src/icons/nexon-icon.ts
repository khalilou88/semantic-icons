import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-nexon-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>NEXON</svg:title>
    <svg:path
      d="M10.714 15.358V0L0 5.697v15.358L13.29 24 24 18.303zm-9.495-1.219 7.291 1.568-7.291 3.832zm11.895 8.578L2.35 20.327l7.454-3.926 10.846 2.406z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNEXONIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
