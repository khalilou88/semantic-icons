import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-surfing-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 1.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM22 22c0 .55-.45 1-1 1-1.03 0-2.05-.25-3-.75a6.36 6.36 0 0 1-6.09-.05c-1.79.87-3.92.98-5.58-.14C5.3 22.69 4.15 23 3 23c-.55 0-1-.45-1-1s.45-1 1-1c.87 0 1.73-.24 2.53-.7.29-.16.65-.17.94 0 1.59.9 3.48.9 5.06 0a.98.98 0 0 1 .94 0c1.59.9 3.48.9 5.06 0a.98.98 0 0 1 .94 0c.8.46 1.66.7 2.53.7.55 0 1 .45 1 1zM8.04 18.86c.31.09.63.14.96.14.9 0 1.72-.37 2.39-.91.35-.28.87-.28 1.22 0 .67.54 1.49.91 2.39.91s1.72-.37 2.39-.91c.03-.03.07-.05.11-.07-.46-.39-.97-.79-1.5-1.17v-2.87c0-.61-.28-1.19-.77-1.57L12.17 10l2.25-1.52a7.02 7.02 0 0 0 4.93 3.43c.6.1 1.14-.39 1.14-1 0-.49-.36-.9-.84-.98a5.005 5.005 0 0 1-3.51-2.46l-.88-1.55c-.29-.52-.77-.8-1.22-.89l-4.73-.88c-.52-.1-1.06.02-1.5.32L5.82 5.83c-.45.32-.57.94-.26 1.39.32.46.94.58 1.4.27l1.99-1.37 2 .37L8.8 7.94a1.8 1.8 0 0 0-.77 1.79l.52 3.1c-1.42-.52-2.72-.83-3.7-.83-.84 0-1.85.25-1.85 1.28 0 1.44 2.19 3.62 5.04 5.58zM14 14v1.5c-.78-.48-2.34-1.33-3.26-1.75l-.44-2.65L14 14z"
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
export class SiSurfingIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
