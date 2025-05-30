import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-filter-tilt-shift-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43A9.949 9.949 0 0 0 13 2.05zm0 17.88v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm-8.74-1.61 1.43-1.43A7.868 7.868 0 0 1 4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32zM2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9L4.26 5.68A9.949 9.949 0 0 0 2.05 11zm16.26-3.9a7.941 7.941 0 0 1 1.62 3.9h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1zM7.1 5.69A7.941 7.941 0 0 1 11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69zM5.68 19.74A9.981 9.981 0 0 0 11 21.95v-2.02a7.941 7.941 0 0 1-3.9-1.62l-1.42 1.43zm16.27-6.73h-2.02a7.945 7.945 0 0 1-1.62 3.89l1.43 1.43a9.981 9.981 0 0 0 2.21-5.32zM9 12c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"
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
export class SiFilterTiltShiftIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
