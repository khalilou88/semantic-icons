import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-format-color-reset-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31zm-.88 3.12L12.5 12.5 5.27 5.27 4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6 1.52 0 2.9-.57 3.96-1.5l2.63 2.63 1.27-1.27-2.74-2.74z"
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
export class SiFormatColorResetIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
