import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-fort-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19 8.17 20.17 7h-4.34L17 8.17V12H7V8.17L8.17 7H3.83L5 8.17v7.66l-2 2V19h5v-1c0-2.21 1.79-4 4-4s4 1.79 4 4v1h5v-1.17l-2-2V8.17z"
      opacity=".3"
    />
    <svg:path
      d="M23 7V3h-2v2h-2V3h-2v2h-2V3h-2v4l2 2v1H9V9l2-2V3H9v2H7V3H5v2H3V3H1v4l2 2v6l-2 2v4h9v-3c0-1.1.9-2 2-2s2 .9 2 2v3h9v-4l-2-2V9l2-2zm-2 12h-5v-1c0-2.21-1.79-4-4-4s-4 1.79-4 4v1H3v-1.17l2-2V8.17L3.83 7h4.34L7 8.17V12h10V8.17L15.83 7h4.34L19 8.17v7.66l2 2V19z"
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
export class SiFortIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
