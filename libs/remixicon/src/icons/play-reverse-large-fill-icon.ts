import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-play-reverse-large-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18 20.1957V3.80421C18 3.01878 17.1361 2.53993 16.47 2.95621L3.3568 11.152C2.73013 11.5436 2.73013 12.4563 3.3568 12.848L16.47 21.0437C17.136 21.46 18 20.9812 18 20.1957Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPlayReverseLargeFillIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
