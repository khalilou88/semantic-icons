import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-panorama-horizontal-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 6.55c2.6.77 5.28 1.16 8 1.16 2.72 0 5.41-.39 8-1.16v10.91c-2.6-.77-5.28-1.16-8-1.16-2.72 0-5.41.39-8 1.16V6.55M2 3.77v16.47s.77-.26.88-.3A26.24 26.24 0 0 1 12 18.3c3.09 0 6.18.55 9.12 1.64.11.04.88.3.88.3V3.77s-.77.26-.88.3C18.18 5.15 15.09 5.71 12 5.71s-6.18-.56-9.12-1.64c-.11-.05-.88-.3-.88-.3z"
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
export class SiPanoramaHorizontalIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
