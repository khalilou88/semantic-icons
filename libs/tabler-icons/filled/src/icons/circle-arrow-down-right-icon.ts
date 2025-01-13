import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-circle-arrow-down-right-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-2 4.66l-.117 .007a1 1 0 0 0 -.883 .993v3.585l-4.293 -4.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l4.292 4.293h-3.585l-.117 .007a1 1 0 0 0 .117 1.993l6.034 .001a.998 .998 0 0 0 .186 -.025l.053 -.014l.066 -.02l.13 -.059l.093 -.055a.98 .98 0 0 0 .438 -.828v-6l-.007 -.117a1 1 0 0 0 -.993 -.883z"
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
export class SiCircleArrowDownRightIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
