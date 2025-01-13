import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-kebab-dining-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.75 8H11v5H7.75v1h.75a2.5 2.5 0 0 1 0 5h-.75v4h-1.5v-4H5.5a2.5 2.5 0 0 1 0-5h.75v-1H3V8h3.25V7H5.5a2.5 2.5 0 0 1 0-5h.75V1h1.5v1h.75a2.5 2.5 0 0 1 0 5h-.75v1zm10-1h.75a2.5 2.5 0 0 0 0-5h-.75V1h-1.5v1h-.75a2.5 2.5 0 0 0 0 5h.75v1H13v5h3.25v1h-.75a2.5 2.5 0 0 0 0 5h.75v4h1.5v-4h.75a2.5 2.5 0 0 0 0-5h-.75v-1H21V8h-3.25V7z"
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
export class SiKebabDiningIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
