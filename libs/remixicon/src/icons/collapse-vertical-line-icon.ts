import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-collapse-vertical-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.9995 13.4995 16.9492 18.4493 15.535 19.8635 12.9995 17.3279 12.9995 22.9995H10.9995L10.9995 17.3279 8.46643 19.861 7.05222 18.4468 11.9995 13.4995ZM10.9995.999512 10.9995 6.67035 8.46448 4.13535 7.05026 5.54956 12 10.4995 16.9497 5.54977 15.5355 4.13555 12.9995 6.67157V.999512L10.9995.999512Z"
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
export class SiCollapseVerticalLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
