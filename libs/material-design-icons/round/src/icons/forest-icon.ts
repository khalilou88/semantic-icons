import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-forest-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.14 12h-.06c.81 0 1.28-.91.82-1.57L9.82 3.17a1 1 0 0 0-1.64 0L3.1 10.43c-.46.66.01 1.57.82 1.57h-.06L.99 16.46c-.43.66.05 1.54.84 1.54H7v2c0 1.1.9 2 2 2s2-.9 2-2v-2h5.17c.79 0 1.27-.88.84-1.54L14.14 12z"
    />
    <svg:path
      d="M23.01 16.46 20.14 12h-.06c.81 0 1.28-.91.82-1.57l-5.08-7.26a1 1 0 0 0-1.64 0l-1.57 2.24 3.11 4.44a2.004 2.004 0 0 1-.16 2.5l2.29 3.57c.4.62.42 1.4.07 2.04-.01.02-.02.03-.03.04h4.28c.79 0 1.27-.88.84-1.54zM13 20c0 1.1.9 2 2 2s2-.9 2-2v-1h-4v1z"
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
export class SiForestIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
