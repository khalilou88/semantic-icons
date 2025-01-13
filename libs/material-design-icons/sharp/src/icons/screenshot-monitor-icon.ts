import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-screenshot-monitor-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M22 3H2v16h6v2h8v-2h6V3zm-2 14H4V5h16v12z" />
    <svg:path d="M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z" />
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
export class SiScreenshotMonitorIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
