import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-beenhere-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66l7.57 5.04c.34.22.77.22 1.11 0l7.56-5.04c.53-.36.88-.97.88-1.66V3c0-1.1-.9-2-2-2zm-.7 6.7-7.59 7.59a.996.996 0 0 1-1.41 0L5.71 11.7a.996.996 0 1 1 1.41-1.41L10 13.17l6.88-6.88c.39-.39 1.02-.39 1.41 0s.4 1.02.01 1.41z"
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
export class SiBeenhereIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
