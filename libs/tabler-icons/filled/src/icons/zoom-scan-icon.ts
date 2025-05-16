import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-zoom-scan-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M4 15a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 0 2h-2a3 3 0 0 1 -3 -3v-2a1 1 0 0 1 1 -1"
    />
    <svg:path
      d="M20 15a1 1 0 0 1 1 1v2a3 3 0 0 1 -3 3h-2a1 1 0 0 1 0 -2h2a1 1 0 0 0 1 -1v-2a1 1 0 0 1 1 -1"
    />
    <svg:path
      d="M11 7a4 4 0 0 1 3.446 6.031l2.261 2.262a1 1 0 0 1 -1.414 1.414l-2.262 -2.26l-.031 .017a4 4 0 0 1 -6 -3.464l.005 -.2a4 4 0 0 1 3.995 -3.8"
    />
    <svg:path
      d="M8 3a1 1 0 1 1 0 2h-2a1 1 0 0 0 -1 1v2a1 1 0 1 1 -2 0v-2a3 3 0 0 1 3 -3z"
    />
    <svg:path
      d="M18 3a3 3 0 0 1 3 3v2a1 1 0 0 1 -2 0v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 0 -2z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiZoomScanIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
