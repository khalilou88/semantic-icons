import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-square-asterisk-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 5.5a1 1 0 0 0 -1 1v1.631l-1.445 -.963l-.101 -.06a1 1 0 0 0 -1.009 1.724l1.75 1.168l-1.75 1.169l-.093 .07a1 1 0 0 0 1.203 1.594l1.445 -.965v1.632l.007 .117a1 1 0 0 0 1.993 -.117v-1.631l1.445 .963l.101 .06a1 1 0 0 0 1.009 -1.724l-1.752 -1.169l1.752 -1.167l.093 -.07a1 1 0 0 0 -1.203 -1.594l-1.445 .962v-1.63l-.007 -.117a1 1 0 0 0 -.993 -.883z"
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
export class SiSquareAsteriskIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
