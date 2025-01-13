import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mobiledata-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16 7h3l-4-4-4 4h3v4.17l2 2zM2.81 2.81 1.39 4.22 8 10.83v6.18l-3 .01L9 21l4-4-3 .01v-4.18l9.78 9.78 1.41-1.42z"
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
export class SiMobiledataOffIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
