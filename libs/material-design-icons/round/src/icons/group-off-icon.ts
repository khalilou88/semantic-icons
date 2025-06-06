import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-group-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4h-.18l-.77-.77c.6-.94.95-2.05.95-3.23zM7.24 4.41a3.996 3.996 0 0 1 5.35 5.35L7.24 4.41zm13.95 16.78a.996.996 0 1 1-1.41 1.41l-2.99-2.99A1 1 0 0 1 16 20H2c-.55 0-1-.45-1-1v-2c0-2.66 5.33-4 8-4 .37 0 .8.03 1.25.08L9.17 12H9c-2.21 0-4-1.79-4-4v-.17L1.39 4.22A.996.996 0 1 1 2.8 2.81l18.39 18.38zm-2.3-5.12c-.29-1.22-1.13-2.19-2.23-2.94 2.76.4 6.34 1.69 6.34 3.87v2c0 .32-.15.6-.38.79l-3.73-3.72z"
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
export class SiGroupOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
