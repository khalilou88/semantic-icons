import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-play-reverse-large-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16 18.3915V5.60846L5.77359 12L16 18.3915ZM18 3.80421V20.1957C18 20.9812 17.136 21.46 16.47 21.0437L3.3568 12.848C2.73013 12.4563 2.73013 11.5436 3.3568 11.152L16.47 2.95621C17.1361 2.53993 18 3.01878 18 3.80421Z"
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
export class SiPlayReverseLargeLineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
