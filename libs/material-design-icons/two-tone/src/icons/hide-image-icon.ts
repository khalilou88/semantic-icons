import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hide-image-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m16.17 19-2-2H6l3-4 2.25 3 .82-1.1L5 7.83V19zM7.83 5 19 16.17V5z"
      opacity=".3"
    />
    <svg:path
      d="M19 5v11.17l2 2V5c0-1.1-.9-2-2-2H5.83l2 2H19zM2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.41L2.81 2.81zM5 19V7.83l7.07 7.07-.82 1.1L9 13l-3 4h8.17l2 2H5z"
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
export class SiHideImageIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
