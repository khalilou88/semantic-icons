import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-alarm-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.04 6.29C10.66 6.11 11.32 6 12 6c3.86 0 7 3.14 7 7 0 .68-.11 1.34-.29 1.96l1.56 1.56c.47-1.08.73-2.27.73-3.52A9 9 0 0 0 8.47 4.72l1.57 1.57zm7.297-4.48 4.607 3.845-1.28 1.535-4.61-3.843zm1.903 16.51-1.43-1.43-9.7-9.7-1.43-1.43-.74-.74L4.52 3.6l-1.5-1.5-1.41 1.41 1.37 1.37-.92.77 1.28 1.54 1.06-.88.8.8A8.964 8.964 0 0 0 3 13a9 9 0 0 0 9 9c2.25 0 4.31-.83 5.89-2.2l2.1 2.1 1.41-1.41-2.16-2.17zM12 20c-3.86 0-7-3.14-7-7 0-1.7.61-3.26 1.62-4.47l9.85 9.85A6.956 6.956 0 0 1 12 20zM7.48 3.73l.46-.38-1.28-1.54-.6.5z"
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
export class SiAlarmOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
