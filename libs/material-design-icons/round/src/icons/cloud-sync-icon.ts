import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cloud-sync-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M24 17.48a2.5 2.5 0 0 1-2.5 2.5L15 20c-1.66 0-3-1.34-3-3 0-1.6 1.26-2.9 2.84-2.98A3.495 3.495 0 0 1 18 12c1.76 0 3.2 1.3 3.45 2.99.02 0 .03-.01.05-.01a2.5 2.5 0 0 1 2.5 2.5zM10 15c0-.55-.45-1-1-1s-1 .45-1 1v1.44c-1.22-1.1-2-2.67-2-4.44 0-2.38 1.39-4.43 3.4-5.4.37-.18.6-.56.6-.97 0-.71-.73-1.18-1.37-.88C5.89 6.03 4 8.79 4 12c0 2.4 1.06 4.54 2.73 6H5c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-4zm9-9c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7.56c.98.89 1.68 2.08 1.92 3.44h2.02a7.98 7.98 0 0 0-2.66-5H19z"
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
export class SiCloudSyncIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
