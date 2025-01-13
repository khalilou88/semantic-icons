import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-balloon-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M12 1a7 7 0 0 1 7 7c0 5.457 -3.028 10 -7 10c-3.9 0 -6.89 -4.379 -6.997 -9.703l-.003 -.297l.004 -.24a7 7 0 0 1 6.996 -6.76zm0 4a1 1 0 0 0 0 2l.117 .007a1 1 0 0 1 .883 .993l.007 .117a1 1 0 0 0 1.993 -.117a3 3 0 0 0 -3 -3z"
    />
    <svg:path
      d="M12 16a1 1 0 0 1 .993 .883l.007 .117v1a3 3 0 0 1 -2.824 2.995l-.176 .005h-3a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 1 -2 0a3 3 0 0 1 2.824 -2.995l.176 -.005h3a1 1 0 0 0 .993 -.883l.007 -.117v-1a1 1 0 0 1 1 -1z"
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
export class SiBalloonIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
