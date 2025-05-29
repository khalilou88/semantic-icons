import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-file-horizontal-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M22 12l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007h-4l-.15 -.005a2 2 0 0 1 -1.844 -1.838l-.006 -.157v-4l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007h-9a3 3 0 0 0 -2.995 2.824l-.005 .176v10a3 3 0 0 0 2.824 2.995l.176 .005h14a3 3 0 0 0 2.995 -2.824l.005 -.176z"
    />
    <svg:path d="M17 5v4l4.001 .001z" />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFileHorizontalIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
