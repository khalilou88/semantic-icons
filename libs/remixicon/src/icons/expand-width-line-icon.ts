import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-expand-width-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2 18L2 6H4L4 18H2ZM9.44975 7.05025L4.5 12L9.44727 16.9473L10.8615 15.5331L8.32843 13H15.6708L13.1358 15.535L14.55 16.9492L19.5 11.9995L14.5503 7.04976L13.136 8.46398L15.6721 11H8.32843L10.864 8.46447L9.44975 7.05025ZM20 6H22V18H20V6Z"
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
export class SiExpandWidthLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
