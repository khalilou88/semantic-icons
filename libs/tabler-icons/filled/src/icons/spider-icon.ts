import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-spider-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M19 3a1 1 0 0 1 1 1v2a1 1 0 0 1 -.293 .707l-3.293 3.293h3.17l1.209 -1.207a1 1 0 0 1 1.414 1.414l-1.5 1.5a1 1 0 0 1 -.707 .293h-3.585l4.292 4.293a1 1 0 0 1 .293 .707v2a1 1 0 0 1 -2 0v-1.585l-2.016 -2.016a5 5 0 0 1 -9.968 0l-2.016 2.015v1.586a1 1 0 0 1 -.883 .993l-.117 .007a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 .293 -.707l4.291 -4.293h-3.584a1 1 0 0 1 -.707 -.293l-1.5 -1.5a1 1 0 0 1 1.414 -1.414l1.208 1.207h3.17l-3.292 -3.293a1 1 0 0 1 -.293 -.707v-2a1 1 0 1 1 2 0v1.585l3.025 3.025a3 3 0 0 1 5.95 0l3.025 -3.026v-1.584a1 1 0 0 1 .883 -.993z"
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
export class SiSpiderIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
