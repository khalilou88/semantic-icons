import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-integration-instructions-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 0 0-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.7 11.88c-.39.39-1.03.39-1.42 0l-2.17-2.17a.996.996 0 0 1 0-1.41l2.17-2.17c.39-.39 1.03-.39 1.42 0 .39.39.39 1.02 0 1.41L8.83 12l1.46 1.46c.39.39.4 1.03.01 1.42zM12 4.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm1.7 10.63a.996.996 0 0 1 0-1.41L15.17 12l-1.47-1.47a.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0l2.17 2.17c.39.39.39 1.02 0 1.41l-2.17 2.17c-.39.4-1.03.4-1.42.01z"
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
export class SiIntegrationInstructionsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
