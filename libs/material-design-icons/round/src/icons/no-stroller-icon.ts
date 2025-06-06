import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-no-stroller-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm6.3-15.9a8.88 8.88 0 0 0-7.76-.39l4.37 4.37L14.3 4.1zm6.19 17.8a.996.996 0 0 0 0-1.41l-9.82-9.82-7.16-7.16A.996.996 0 1 0 2.1 4.92l7.26 7.26L6.7 15.3c-.55.65-.09 1.65.76 1.65h6.66l1.17 1.17c-.88.33-1.47 1.25-1.26 2.28.15.76.78 1.39 1.54 1.54 1.03.21 1.95-.38 2.28-1.26l1.2 1.2c.41.41 1.04.41 1.44.02zM17 6.27c.58-.68.97-1.27 1.65-1.27.68 0 1.22.52 1.33 1.21.1.45.5.79.98.79.55 0 1-.45 1-1 0-.06 0-.11-.01-.16v-.01C21.65 4.22 20.3 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03l-3.5 4.11L17 14.17v-7.9z"
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
export class SiNoStrollerIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
