import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-credit-card-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.83 4H22v15.17L14.83 12H20V8h-9.17l-4-4zm13.66 19.31L17.17 20H2V4.83L.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41zM9.17 12l-4-4H4v4h5.17z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCreditCardOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
