import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-high-quality-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8.75 11c-.41 0-.75-.34-.75-.75V13h-2v1.25c0 .41-.34.75-.75.75S6 14.66 6 14.25v-4.5c0-.41.34-.75.75-.75s.75.34.75.75v1.75h2V9.75c0-.41.34-.75.75-.75s.75.34.75.75v4.5c0 .41-.34.75-.75.75zM18 14c0 .55-.45 1-1 1h-.75v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-.5h2v-3h-2v3z"
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
export class SiHighQualityIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
