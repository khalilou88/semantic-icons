import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-stop-screen-share-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.67 12.54C9.13 12.92 7.96 13.71 7 15c.31-1.48.94-2.93 2.08-4.05L4.13 6.02H4v10.01h10.14l-3.47-3.49z"
      opacity=".3"
    />
    <svg:path
      d="m21.79 18 2 2H24v-2h-2.21zM1.11 2.98l1.55 1.56c-.41.37-.66.89-.66 1.48V16c0 1.1.9 2 2.01 2H0v2h18.13l2.71 2.71 1.41-1.41L2.52 1.57 1.11 2.98zM4 6.02h.13l4.95 4.93C7.94 12.07 7.31 13.52 7 15c.96-1.29 2.13-2.08 3.67-2.46l3.46 3.48H4v-10zm16 0v10.19l1.3 1.3c.42-.37.7-.89.7-1.49v-10a2 2 0 0 0-2-2H7.8l2 2H20zm-7.07 3.13 2.79 2.78 1.28-1.2L13 7v2.13l-.07.02z"
    />
    <svg:path
      d="M20 6.02H9.8l3.13 3.13c.02 0 .04-.01.07-.02V7l4 3.73-1.28 1.2L20 16.21V6.02z"
      opacity=".3"
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
export class SiStopScreenShareIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
