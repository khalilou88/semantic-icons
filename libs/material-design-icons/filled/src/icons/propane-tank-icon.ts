import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-propane-tank-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 15v3c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-3H4zm16-2v-3c0-1.86-1.28-3.41-3-3.86V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2.14c-1.72.45-3 2-3 3.86v3h16zM9 4h6v2h-2c0-.55-.45-1-1-1s-1 .45-1 1H9V4z"
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
export class SiPropaneTankIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
