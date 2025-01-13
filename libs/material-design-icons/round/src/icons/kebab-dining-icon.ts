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
      d="M7.75 13v1h.75a2.5 2.5 0 0 1 0 5h-.75v3.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V19H5.5a2.5 2.5 0 0 1 0-5h.75v-1H4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h2.25V7H5.5a2.5 2.5 0 0 1 0-5h.75v-.25c0-.41.34-.75.75-.75s.75.34.75.75V2h.75a2.5 2.5 0 0 1 0 5h-.75v1H10c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1H7.75zm10 0v1h.75a2.5 2.5 0 0 1 0 5h-.75v3.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V19h-.75a2.5 2.5 0 0 1 0-5h.75v-1H14c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h2.25V7h-.75a2.5 2.5 0 0 1 0-5h.75v-.25c0-.41.34-.75.75-.75s.75.34.75.75V2h.75a2.5 2.5 0 0 1 0 5h-.75v1H20c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-2.25z"
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
