import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-broken-image-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 5v6.59l-2.29-2.3c-.39-.39-1.03-.39-1.42 0L14 12.59 10.71 9.3a.996.996 0 0 0-1.41 0L6 12.59 3 9.58V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42 3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l2.29 2.29c.39.39 1.02.39 1.41 0l3.3-3.3 3.29 3.29c.39.39 1.02.39 1.41 0l3.3-3.28z"
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
export class SiBrokenImageIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
