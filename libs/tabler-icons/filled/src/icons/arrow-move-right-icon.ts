import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-arrow-move-right-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M18.707 8.293l3 3q .054 .053 .097 .112l.071 .11l.054 .114l.035 .105l.03 .148l.006 .118l-.003 .075l-.017 .126l-.03 .111l-.044 .111l-.052 .098l-.074 .104l-.073 .082l-3 3a1 1 0 0 1 -1.414 -1.414l1.292 -1.293h-7.585a1 1 0 0 1 0 -2h7.585l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.414 0m-13.707 .707a3 3 0 1 1 0 6a3 3 0 0 1 0 -6"
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
export class SiArrowMoveRightIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
